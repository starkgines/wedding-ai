// src/pages/RSVP.js
import React, { useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../RSVP.css';

const RSVP = () => {
  const [codigo, setCodigo] = useState('');
  const [invitado, setInvitado] = useState(null);
  //const [confirmacion, setConfirmacion] = useState({ asistentes: 1, email: '' });
  const [error, setError] = useState('');
  const [maxAsistentes, setMaxAsistentes] = useState(1);

  const [confirmacion, setConfirmacion] = useState({ 
    asistentes: 1, 
    email: '',
    comentario: '',
    num_confirmado: 0 
  });
  const MAX_CARACTERES = 200;


  const opcionesAsistentes = Array.from({length: maxAsistentes}, (_, i) => i + 1);

  const handleComentarioChange = (e) => {
    const input = e.target.value;
    if (input.length <= MAX_CARACTERES) {
      setConfirmacion({...confirmacion, comentario: input});
    }
  };

  // Paso 1: Validar código
  const validarCodigo = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "invitados", codigo);
      const docSnap = await getDoc(docRef);
      
      console.log("Documento obtenido:", docSnap.exists(), docSnap.data());

      if (docSnap.exists()) {
        const data = docSnap.data();
        const asistentesPermitidos = data.asistentes || 1; // Usar 1 como valor por defecto
        const nombreAsistente = data.Nombre || ''
        setMaxAsistentes(asistentesPermitidos);
        
        setConfirmacion(data);

        if (!data.confirmado) {
          setInvitado(data);
          setError('');
        } else {
          setError("Este código ya fue utilizado");
        }
      } else {
        setError("Código inválido");
      }
    } catch (err) {
      console.error("Error en validarCodigo:", err);
      setError("Error al validar el código");
    }
  };

  // Manejar cambio de asistentes
  const handleAsistentesChange = (e) => {
    let value = Math.min(Number(e.target.value), maxAsistentes);
   // Asegurar mínimo 1
    setConfirmacion({...confirmacion, num_confirmado: value});
  };

  // Paso 2: Enviar confirmación
  const enviarConfirmacion = async (e) => {
    e.preventDefault();
    try {
      if (confirmacion.num_confirmado > maxAsistentes) {
        setError(`No puedes exceder los ${maxAsistentes} asistentes`);
        return;
      }
      if (confirmacion.comentario.length > MAX_CARACTERES) {
        setError(`El comentario no puede exceder ${MAX_CARACTERES} caracteres`);
        return;
      }

      await updateDoc(doc(db, "invitados", codigo), {
        ...confirmacion,
        confirmado: true,
        comentario: confirmacion.comentario,
        num_confirmado: confirmacion.num_confirmado
        
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
          <p>Hola {invitado.Nombre}!</p>
          <label>
            Número de asistentes (Máximo {maxAsistentes}):
            <select
              value={confirmacion.num_confirmado}
              onChange={handleAsistentesChange}
              className="asistentes-select"
              required
            >
              {opcionesAsistentes.map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'persona' : 'personas'}
                </option>
              ))}
            </select>
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
          <label>
        ¿Quieres decirnos algo? ({MAX_CARACTERES - confirmacion.comentario.length} caracteres restantes)
        <textarea
          value={confirmacion.comentario}
          onChange={handleComentarioChange}
          placeholder="Comentarios, alergias, preferencias musicales..."
          rows="4"
          maxLength={MAX_CARACTERES}
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