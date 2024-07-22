import React from 'react';

const messages = [
  { sender: 'Martin', text: 'Hai teman-teman, sudah mulai modul baru belum?' },
  { sender: 'Devi', text: 'Hai Martin! Sudah, aku sudah baca dua pelajaran pertama. Menarik banget.' },
  { sender: 'Lucas', text: 'Halo semuanya! Aku baru selesai pelajaran pertama.' },
  { sender: 'You', text: 'Aku masih di pelajaran pertama. Ada yang sudah mulai tugas kedua?' },
  { sender: 'Caroline', text: 'Aku juga masih di pelajaran pertama. Mungkin kita bisa diskusi bareng.' },
];

export default function Chat() {
  return (
    <div className="border p-4 rounded ">
      {messages.map((message, index) => (
        <div key={index} className="mb-4">
          <p><strong>{message.sender}</strong></p>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}