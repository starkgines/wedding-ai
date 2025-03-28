// src/pages/RSVP.js
import React, { useState } from 'react';
import { doc, getDoc,getDocs, updateDoc ,collection} from 'firebase/firestore';
import { db } from '../firebase';
import '../RSVP.css';

const RSVP = () => {
  const [codigo, setCodigo] = useState('');
  const [invitado, setInvitado] = useState(null);
  const [confirmacion, setConfirmacion] = useState({ asistentes: 1, email: '' });
  const [error, setError] = useState('');

  // Paso 1: Validar código
  const validarCodigo = async (e) => {
    e.preventDefault();
    try {
      const querySnapshot = await getDocs(collection(db, 'invitados'));
      console.log('Documentos en "invitados":', querySnapshot.size);


      querySnapshot.forEach((doc) => {
        console.log('Documento:', doc.id, '=>', doc.data());
      });


      const docRef = doc(db, "invitados", "ABC123");
      console.log("Intentando obtener documento:", codigo);
      const docSnap = await getDoc(docRef);
      getDoc(docRef).then(doc => console.log("EXISTE?", doc.exists()));
      console.log("Documento obtenido:", docSnap.exists(), docSnap.data());
      if (docSnap.exists() && !docSnap.data().confirmado) {
        setInvitado(docSnap.data());
      } else {
        setError("Código inválido o ya utilizado");
      }
    } catch (err) {
    console.error("Error en validarCodigo:", err);
      setError("Error al validar el código");
    }
  };

  // Paso 2: Enviar confirmación
  const enviarConfirmacion = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "invitados", codigo), {
        confirmado: true,
        ...confirmacion
      });
      setError("¡Confirmación exitosa! Nos vemos en la boda 🎉");
      setInvitado(null);
      setCodigo('');
    } catch (err) {
      setError("Error al confirmar asistencia");
    }
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <h2>Confirmar Asistencia</h2>
      {!invitado ? (
        <form onSubmit={validarCodigo}>
          <input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value.toUpperCase())}
            placeholder="Ingresa tu código"
            required
          />
          <button type="submit">Validar Código</button>
          {error && <p className="error">{error}</p>}
        </form>
      ) : (
        <form onSubmit={enviarConfirmacion}>
          <p>Hola {invitado.nombre}!</p>
          <label>
            Número de asistentes:
            <input
              type="number"
              min="1"
              max={invitado.asistentes}
              value={confirmacion.asistentes}
              onChange={(e) => setConfirmacion({...confirmacion, asistentes: e.target.value})}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={confirmacion.email}
              onChange={(e) => setConfirmacion({...confirmacion, email: e.target.value})}
              required
            />
          </label>
          <button type="submit">Confirmar</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
    </section>
  );
};

export default RSVP;