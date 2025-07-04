import pandas as pd
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import os # Importar el módulo os para verificar la existencia del archivo

# --- Configuración de Firebase ---
# IMPORTANTE: Reemplaza 'path/to/your/serviceAccountKey.json' con la ruta REAL
# de tu archivo JSON de clave de cuenta de servicio de Firebase.
# Este archivo contiene tus credenciales y es CRUCIAL para autenticar tu aplicación.
# Asegúrate de que este archivo esté protegido y NUNCA lo subas a repositorios públicos.
# Puedes obtenerlo desde la Consola de Firebase -> Configuración del proyecto -> Cuentas de servicio -> Generar nueva clave privada.
service_account_key_path = 'path/to/your/serviceAccountKey.json'

# Verificar si el archivo de credenciales existe
if not os.path.exists(service_account_key_path):
    print(f"Error: El archivo de credenciales de Firebase no se encontró en '{service_account_key_path}'.")
    print("Por favor, descarga tu archivo 'serviceAccountKey.json' desde la consola de Firebase")
    print("y actualiza la variable 'service_account_key_path' con la ruta correcta.")
    exit()

try:
    # Inicializar la aplicación de Firebase con las credenciales
    cred = credentials.Certificate(service_account_key_path)
    firebase_admin.initialize_app(cred)
    # Obtener una instancia del cliente de Firestore
    db = firestore.client()
    print("Conexión a Firebase Firestore establecida exitosamente.")
except Exception as e:
    print(f"Error al inicializar Firebase: {e}")
    print("Asegúrate de que el archivo de credenciales sea válido y la ruta sea correcta.")
    exit()

# --- Configuración del archivo Excel ---
# Reemplaza 'invitados.xlsx' con el nombre de tu archivo Excel.
# Asegúrate de que el archivo Excel esté en el mismo directorio que este script,
# o proporciona la ruta completa al archivo.
excel_file_path = 'invitados.xlsx'

# Verificar si el archivo Excel existe
if not os.path.exists(excel_file_path):
    print(f"Error: El archivo Excel '{excel_file_path}' no se encontró.")
    print("Asegúrate de que el archivo esté en el mismo directorio que este script o proporciona la ruta completa.")
    exit()

try:
    # Leer el archivo Excel en un DataFrame de pandas
    # pandas inferirá automáticamente los tipos de datos de las columnas.
    df = pd.read_excel(excel_file_path)
    print(f"Archivo Excel '{excel_file_path}' cargado exitosamente. Se encontraron {len(df)} filas.")
    # Mostrar las primeras filas del DataFrame para verificar
    print("\nPrimeras 5 filas del Excel:")
    print(df.head().to_string())
except Exception as e:
    print(f"Error al leer el archivo Excel: {e}")
    print("Asegúrate de que el archivo sea un Excel válido y no esté corrupto.")
    exit()

# --- Procesar y agregar datos a Firebase Firestore ---
# Define el nombre de la colección en Firestore donde se guardarán los datos.
# Puedes cambiar 'invitados' por el nombre que desees para tu colección.
collection_name = 'invitados'

print(f"\nIniciando la carga de datos a la colección '{collection_name}' en Firebase Firestore...")

# Iterar sobre cada fila del DataFrame de pandas
for index, row in df.iterrows():
    # Convertir cada fila del DataFrame a un diccionario.
    # Las claves del diccionario serán los nombres de las columnas de tu Excel.
    invitado_data = row.to_dict()

    try:
        # Agrega un nuevo documento a la colección.
        # Firestore generará automáticamente un ID único para cada documento.
        doc_ref = db.collection(collection_name).add(invitado_data)
        print(f"  -> Invitado '{invitado_data.get('Nombre', 'N/A')}' (Fila {index + 2} del Excel) agregado con ID: {doc_ref[1].id}")
    except Exception as e:
        print(f"  -> Error al agregar invitado de la fila {index + 2} ({invitado_data.get('Nombre', 'N/A')}): {e}")
        print("  Saltando a la siguiente fila...")

print("\nProceso de carga de datos a Firebase completado.")
print(f"Se intentaron procesar {len(df)} invitados desde el Excel.")
