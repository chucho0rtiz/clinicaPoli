export interface TypeEstado {
    idEstado: number;
    nombreEstado: string;
}
export const DataEstado: TypeEstado[] = [
    {
        idEstado: 1,
        nombreEstado: "Aprobado"
    }, {
        idEstado: 2,
        nombreEstado: "En Proceso"
    }, {
        idEstado: 3,
        nombreEstado: "Finalizado"
    }, {
        idEstado: 4,
        nombreEstado: "Cancelado"
    }
]

export interface TypeEspecialidad {
    idEspecialidad: number;
    nombreEspecialidad: string;
}
export const DataEspecialidad: TypeEspecialidad[] = [
    {
        idEspecialidad: 1,
        nombreEspecialidad: "radiografia"
    }, {
        idEspecialidad: 2,
        nombreEspecialidad: "cita general"
    }, {
        idEspecialidad: 3,
        nombreEspecialidad: "ortopedia"
    }, {
        idEspecialidad: 4,
        nombreEspecialidad: "optometría "
    }
]

export interface TypeTipoDoc {
    idTipoDoc: number;
    nombreTipoDoc: string;
}
export const DataTipoDoc: TypeTipoDoc[] = [
    {
        idTipoDoc: 1,
        nombreTipoDoc: "Tarjeta de Identidad"
    }, {
        idTipoDoc: 2,
        nombreTipoDoc: "Cedula"
    }, {
        idTipoDoc: 3,
        nombreTipoDoc: "Pasaporte"
    }
]

export const HeaderTableDataPaciente: string[] =
    ['', 'Tipo Documento', 'Numero Identificacion', 'Nombre Paciente', 'Apellido Paciente',
        'Genero', 'Fecha Nacimiento', 'Edad', 'Telefono', 'Direccion', 'Correro', 'Acciones'];
export interface TypePaciente {
    idPaciente: number;
    idTipoDocumento: number
    numeroIdentificacion: string;
    nombrePaciente: string;
    apellidoPaciente: string;
    Genero: string;
    fechaNacimiento: string;
    Edad: number;
    telefono: string;
    direccion: string;
    correro: string;
}
export const DataPaciente: TypePaciente[] = [
    {
        idPaciente: 1,
        idTipoDocumento: 2,
        numeroIdentificacion: '0123456789',
        nombrePaciente: 'raul',
        apellidoPaciente: 'torres',
        Genero: 'masculino',
        fechaNacimiento: '2000-05-15',
        Edad: 23,
        telefono: '4385500',
        direccion: 'carrera 129',
        correro: 'raul@gmail.com',
    },
    {
        idPaciente: 2,
        idTipoDocumento: 3,
        numeroIdentificacion: '0234567891',
        nombrePaciente: 'marta',
        apellidoPaciente: 'casas',
        Genero: 'femenino',
        fechaNacimiento: '1999-01-01',
        Edad: 24,
        telefono: '4385501',
        direccion: 'carrera 10',
        correro: 'marta@gmail.com',
    }
]

export const HeaderTableDataDoctor: string[] =
    ['', 'Tipo Documento', 'Numero Identificacion', 'Nombre Doctor', 'Apellido Doctor', 'Telefono', 'Correro', 'Acciones'];
export interface TypeDoctor {
    idDoctor: number;
    idTipoDocumento: number
    numeroIdentificacion: string;
    nombreDoctor: string;
    apellidoDoctor: string;
    telefono: string;
    correro: string;
    // especialidad: TypeEspecialidad[];
}
export const DataDoctor: TypeDoctor[] = [
    {
        idDoctor: 1,
        idTipoDocumento: 2,
        numeroIdentificacion: '1234567890',
        nombreDoctor: 'mauricio',
        apellidoDoctor: 'torres',
        telefono: '4589685',
        correro: 'mauricio@gmail.com'
        // especialidad: [
        //     {
        //         idEspecialidad: 1,
        //         nombreEspecialidad: "radiografia"
        //     }, {
        //         idEspecialidad: 2,
        //         nombreEspecialidad: "cita general"
        //     }, {
        //         idEspecialidad: 3,
        //         nombreEspecialidad: "ortopedia"
        //     }, {
        //         idEspecialidad: 4,
        //         nombreEspecialidad: "optometría "
        //     }
        // ]
    },
    {
        idDoctor: 2,
        idTipoDocumento: 3,
        numeroIdentificacion: '9123456780',
        nombreDoctor: 'ronals',
        apellidoDoctor: 'murillo',
        telefono: '3589687',
        correro: 'ronals@gmail.com'
        // especialidad: [
        //     {
        //         idEspecialidad: 1,
        //         nombreEspecialidad: "radiografia"
        //     }, {
        //         idEspecialidad: 2,
        //         nombreEspecialidad: "cita general"
        //     }, {
        //         idEspecialidad: 3,
        //         nombreEspecialidad: "ortopedia"
        //     }, {
        //         idEspecialidad: 4,
        //         nombreEspecialidad: "optometría "
        //     }
        // ]
    }
]

export const HeaderTableDataCita: string[] =
    ['', 'Fecha Cita', 'Hora Cita', 'Especialidad', 'Doctor', 'Paciente', 'Estado', 'Observaciones', 'Acciones'];
export interface TypeCita {
    idCita: number;
    fechaCita: string;
    horaCita: string;
    idEspecialidad: number;
    idDoctor: number;
    idPaciente: number;
    idEstado: number;
    observaciones: string;
}
export const DataCita: TypeCita[] = [
    {
        idCita: 1,
        fechaCita: '2023-11-11',
        horaCita: '12:30',
        idEspecialidad: 1,
        idDoctor: 1,
        idPaciente: 1,
        idEstado: 1,
        observaciones: 'cita de urgencia',
    }, {
        idCita: 2,
        fechaCita: '2023-10-11',
        horaCita: '12:30',
        idEspecialidad: 2,
        idDoctor: 2,
        idPaciente: 2,
        idEstado: 2,
        observaciones: 'cita de de baja prioridad',
    }
]
