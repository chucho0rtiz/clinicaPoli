import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Table } from 'reactstrap';
// data
import { DataCita, HeaderTableDataCita, DataDoctor, DataPaciente, DataEspecialidad, DataEstado } from './../../src/data/data.ts';

function Cita() {
    const [dataCita, setDataCita] = useState(DataCita);
    const [edit, setEdit] = useState(false);
    const [headerTableDataCita] = useState(HeaderTableDataCita);
    const [dataDoctor] = useState(DataDoctor);
    const [dataPaciente] = useState(DataPaciente);
    const [dataEspecialidad] = useState(DataEspecialidad);
    const [dataEstado] = useState(DataEstado);
    const [values, setValues] = useState({
        idCita: (dataCita[dataCita.length - 1].idCita + 1),
        fechaCita: '',
        horaCita: '',
        idEspecialidad: 0,
        idDoctor: 0,
        idPaciente: 0,
        idEstado: 1,
        observaciones: ''
    });

    // Obtener infor de las tablas padres
    const getEspecialidad = (info) => {
        let value = dataEspecialidad.find((a) => a.idEspecialidad === info);
        return value.nombreEspecialidad;
    }
    const getDoctor = (info) => {
        let value = dataDoctor.find((a) => a.idDoctor === info);
        return value.nombreDoctor + " " + value.apellidoDoctor;
    }
    const getPaciente = (info) => {
        let value = dataPaciente.find((a) => a.idPaciente === info);
        return value.nombrePaciente + " " + value.apellidoPaciente;;
    }
    const getEstado = (info) => {
        let value = dataEstado.find((a) => a.idEstado === info);
        return value.nombreEstado;
    }

    // Capturar informacion de los campos del formulario
    const handleChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;
        let idX = value;
        if (name === 'idPaciente' || name === 'idEspecialidad' || name === 'idDoctor') {
            idX = parseInt(value);
        }
        const newValues = {
            ...values,
            [name]: idX,
        };
        setValues(newValues);
    }

    // Crud
    const createNewData = () => {
        dataCita.push(values);
        setDataCita(dataCita.map(info => info))
        defaultData();
    }
    const actualizarInfo = () => {
        dataCita.filter((val, key) => {
            if ((val.idCita === values.idCita) === true) {
                dataCita[key] = values;
            }
        })
        setDataCita(dataCita.map((value) => value))
        defaultData();
    }
    const deleteOneData = (info) => {
        setDataCita(dataCita.filter(a => a.idCita !== info));
    }

    // Cambios de estados
    const editOneData = (info) => {
        setEdit(true);
        setValues(info)
    }
    const defaultData = () => {
        setEdit(false);
        setValues({
            idCita: (dataCita[dataCita.length - 1].idCita + 1),
            fechaCita: '',
            horaCita: '',
            idEspecialidad: 0,
            idDoctor: 0,
            idPaciente: 0,
            idEstado: 1,
            observaciones: ''
        });
    }

    return (
        <div>
            <div className='formularioCitas'>
                <h1 className='tituloCita'>Cita</h1>
                <Form className='row'>
                    <FormGroup className="col-4">
                        <Label for="fechaCita">Fecha Cita</Label>
                        <Input
                            type="date"
                            name="fechaCita"
                            id="fechaCita"
                            placeholder="fechaCita"
                            value={values.fechaCita}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="horaCita">Fecha Cita</Label>
                        <Input
                            type="time"
                            name="horaCita"
                            id="horaCita"
                            placeholder="horaCita"
                            value={values.horaCita}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="especialidad">Seleccione una especialidad</Label>
                        <Input
                            type="select"
                            name="idEspecialidad"
                            id="idEspecialidad"
                            value={values.idEspecialidad}
                            onChange={handleChange}
                        >
                            <option value={0} disabled>Seleccione una Especialidad</option>
                            {
                                dataEspecialidad.map((info, key) => {
                                    return (
                                        <option value={info.idEspecialidad}
                                            id={info.idEspecialidad}
                                            key={key}>
                                            {info.nombreEspecialidad}
                                        </option>
                                    )
                                })
                            }
                        </Input>
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="doctor">seleccione un doctor</Label>
                        <Input
                            type="select"
                            name="idDoctor"
                            id="idDoctor"
                            value={values.idDoctor}
                            onChange={handleChange}
                        >
                            <option value={0} disabled>Seleccione un Doctor</option>
                            {
                                dataDoctor.map((info, key) => {
                                    return (
                                        <option value={info.idDoctor}
                                            id={info.idDoctor}
                                            key={key}>
                                            {info.nombreDoctor + " " + info.apellidoDoctor}
                                        </option>
                                    )
                                })
                            }
                        </Input>
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="paciente">seleccione un paciente</Label>
                        <Input
                            type="select"
                            name="idPaciente"
                            id="idPaciente"
                            value={values.idPaciente}
                            onChange={handleChange}
                        >
                            <option value={0} disabled>Seleccione un Paciente</option>
                            {
                                dataPaciente.map((info, key) => {
                                    return (
                                        <option value={info.idPaciente}
                                            id={info.idPaciente}
                                            key={key}>
                                            {info.nombrePaciente + " " + info.apellidoPaciente}
                                        </option>
                                    )
                                })
                            }
                        </Input>
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="observaciones">Observaciones</Label>
                        <Input
                            type="text"
                            name="observaciones"
                            id="observaciones"
                            placeholder="Escriba una observacion"
                            value={values.observaciones}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {
                        edit === false ? (
                            <Button
                                color="success"
                                onClick={createNewData}>Crear</Button>
                        ) : (
                            <>
                                <Button
                                    className='col-5 editData'
                                    color="warning"
                                    onClick={defaultData}>Cancelar</Button>
                                <Button
                                    className='col-5'
                                    color="primary"
                                    onClick={actualizarInfo}>Actualizar</Button>
                            </>
                        )
                    }
                </Form>
            </div>

            <div className='tableCitas'>
                {
                    dataCita.length > 0 ? (
                        <Table dark>
                            <thead>
                                <tr>
                                    {
                                        headerTableDataCita.map((info, key) => {
                                            return (<th key={key}>{info}</th>);
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataCita.map((info, key) => {
                                        return (
                                            <tr className={'infoData' + key}
                                                key={key}>
                                                <td>{info.idCita}</td>
                                                <td>{info.fechaCita}</td>
                                                <td>{info.horaCita}</td>
                                                <td>{getEspecialidad(info.idEspecialidad)}</td>
                                                <td>{getDoctor(info.idDoctor)}</td>
                                                <td>{getPaciente(info.idPaciente)}</td>
                                                <td>{getEstado(info.idEstado)}</td>
                                                <td>{info.observaciones}</td>
                                                <td>
                                                    <Button className='editData' color="primary" onClick={() => editOneData(info)}>Editar</Button>
                                                    <Button color="danger" onClick={() => deleteOneData(info.idCita)}>Eliminar</Button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>
                        </Table>
                    ) : (
                        <h1 className='tituloCita'>No hay datos disponibles</h1>
                    )
                }
            </div>
        </div >
    );

}

export default Cita; 