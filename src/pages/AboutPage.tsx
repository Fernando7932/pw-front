import React from 'react';

const AboutPage: React.FC = () => (
  <div className="p-8 bg-[#0b0e0f] min-h-full text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
        Sobre <span className="text-[#53FC18]">Nosotros</span>
      </h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        Somos un equipo apasionado creando la próxima generación de streaming interactivo para universitarios.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Miembro del equipo de ejemplo */}
        <div className="bg-[#191b1f] p-6 rounded-xl border border-[#24272c] hover:border-[#53FC18] transition-colors group">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#24272c] group-hover:border-[#53FC18] transition-colors">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Fernando" 
              alt="Foto de miembro" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white">Fernando</h3>
          <p className="text-[#53FC18] text-sm font-bold uppercase tracking-wide mt-1">Desarrollador Principal</p>
          <p className="text-gray-500 text-xs mt-4">
            "Construyendo el futuro del streaming línea por línea."
          </p>
        </div>
        {/* Puedes añadir más tarjetas aquí copiando el div anterior */}
      </div>
    </div>
  </div>
);

export default AboutPage;