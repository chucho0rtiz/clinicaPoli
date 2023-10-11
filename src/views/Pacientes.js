import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Table } from 'reactstrap';
// data
// import { DataCita, DataDoctor, DataPaciente, DataTipoDoc, DataEspecialidad, DataEstado } from './../../src/data/data.ts';
import { DataPaciente, HeaderTableDataPaciente, DataTipoDoc } from './../../src/data/data.ts';

function Pacientes() {
    // const [dataCita, setDataCita] = useState(DataCita);
    const [edit, setEdit] = useState(false);
    const [headerTableDataPaciente] = useState(HeaderTableDataPaciente);
    const [dataPaciente, setDataPaciente] = useState(DataPaciente);
    const [dataTipoDoc] = useState(DataTipoDoc);
    const [values, setValues] = useState({
        idPaciente: (dataPaciente[dataPaciente.length - 1].idPaciente + 1),
        idTipoDocumento: 0,
        numeroIdentificacion: '',
        nombrePaciente: '',
        apellidoPaciente: '',
        Genero: '',
        fechaNacimiento: '',
        Edad: 0,
        telefono: '',
        direccion: '',
        correro: ''
    });

    // Obtener infor de las tablas padres
    const getDataTipoDoc = (info) => {
        let value = dataTipoDoc.find((a) => a.idTipoDoc !== info);
        return value.nombreTipoDoc;
    }

    // Capturar informacion de los campos del formulario
    const handleChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;
        let idX = value;
        if (name === 'idTipoDocumento') {
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
        dataPaciente.push(values);
        setDataPaciente(dataPaciente.map(info => info))
        defaultData();
    }
    const actualizarInfo = () => {
        dataPaciente.filter((val, key) => {
            if ((val.idPaciente === values.idPaciente) === true) {
                dataPaciente[key] = values;
            }
        })
        setDataPaciente(dataPaciente.map((value) => value))
        defaultData();
    }
    const deleteOneData = (info) => {
        setDataPaciente(
            dataPaciente.filter(a =>
                a.idPaciente !== info
            )
        );
    }

    // Cambios de estados
    const editOneData = (info) => {
        setEdit(true);
        setValues(info)
    }
    const defaultData = () => {
        setEdit(false);
        setValues({
            idPaciente: (dataPaciente[dataPaciente.length - 1].idPaciente + 1),
            idTipoDocumento: 0,
            numeroIdentificacion: '',
            nombrePaciente: '',
            apellidoPaciente: '',
            Genero: '',
            fechaNacimiento: '',
            Edad: 0,
            telefono: '',
            direccion: '',
            correro: ''
        });
    }

    return (
        <div>
            <div className='formularioCitas'>
                <h1 className='tituloCita'>Pacientes</h1>
                <Form className='row'>
                    <FormGroup className="col-4">
                        <Label for="idTipoDocumento">seleccione Tipo de Documento</Label>
                        <Input
                            type="select"
                            name="idTipoDocumento"
                            id="idTipoDocumento"
                            value={values.idTipoDocumento}
                            onChange={handleChange}
                        >
                            <option value={0} disabled>Seleccione Tipo de Documento</option>
                            {
                                dataTipoDoc.map((info, key) => {
                                    return (
                                        <option value={info.idTipoDoc}
                                            id={info.idTipoDoc}
                                            key={key}>
                                            {info.nombreTipoDoc}
                                        </option>
                                    )
                                })
                            }
                        </Input>
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="numeroIdentificacion">Numero de Identificacion</Label>
                        <Input
                            type="text"
                            name="numeroIdentificacion"
                            id="numeroIdentificacion"
                            placeholder="Numero de Identificacion"
                            value={values.numeroIdentificacion}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="nombrePaciente">Nombre del Paciente</Label>
                        <Input
                            type="text"
                            name="nombrePaciente"
                            id="nombrePaciente"
                            placeholder="Nombre del Paciente"
                            value={values.nombrePaciente}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="apellidoPaciente">Apellido del Paciente</Label>
                        <Input
                            type="text"
                            name="apellidoPaciente"
                            id="apellidoPaciente"
                            placeholder="Apellido del Paciente"
                            value={values.apellidoPaciente}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="Genero">Genero</Label>
                        <Input
                            type="text"
                            name="Genero"
                            id="Genero"
                            placeholder="Genero"
                            value={values.Genero}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="fechaNacimiento">Fecha de Nacimiento</Label>
                        <Input
                            type="date"
                            name="fechaNacimiento"
                            id="fechaNacimiento"
                            placeholder="fechaNacimiento"
                            value={values.fechaNacimiento}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="Edad">Edad</Label>
                        <Input
                            type="number"
                            name="Edad"
                            id="Edad"
                            placeholder="Edad"
                            value={values.Edad}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="telefono">Telefono</Label>
                        <Input
                            type="text"
                            name="telefono"
                            id="telefono"
                            placeholder="Telefono"
                            value={values.telefono}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="direccion">Dirección</Label>
                        <Input
                            type="text"
                            name="direccion"
                            id="direccion"
                            placeholder="Dirección"
                            value={values.direccion}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="correro">Correo</Label>
                        <Input
                            type="text"
                            name="correro"
                            id="correro"
                            placeholder="Correo"
                            value={values.correro}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {
                        edit === false ? (
                            <Button
                                color="success"
                                onClick={createNewData}>Crear</Button>
                        ) : (
                            <div className='row'>
                                <Button
                                    className='col-5 editData'
                                    color="warning"
                                    onClick={defaultData}>Cancelar</Button>
                                <Button
                                    className='col-5'
                                    color="primary"
                                    onClick={actualizarInfo}>Actualizar</Button>
                            </div>
                        )
                    }
                </Form>
            </div>

            <div className='tableCitas'>
                {
                    dataPaciente.length > 0 ? (
                        <Table dark>
                            <thead>
                                <tr>
                                    {
                                        headerTableDataPaciente.map((info, key) => {
                                            return (<th key={key}>{info}</th>);
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataPaciente.map((info, key) => {
                                        return (
                                            <tr className={'infoData' + key}
                                                key={key}>
                                                <td>{info.idPaciente}</td>
                                                <td>{getDataTipoDoc(info.idTipoDocumento)}</td>
                                                <td>{info.numeroIdentificacion}</td>
                                                <td>{info.nombrePaciente}</td>
                                                <td>{info.apellidoPaciente}</td>
                                                <td>{info.Genero}</td>
                                                <td>{info.fechaNacimiento}</td>
                                                <td>{info.Edad}</td>
                                                <td>{info.telefono}</td>
                                                <td>{info.direccion}</td>
                                                <td>{info.correro}</td>
                                                <td>
                                                    <Button className='editData' color="primary" onClick={() => editOneData(info)}>Editar</Button>
                                                    <Button color="danger" onClick={() => deleteOneData(info.idPaciente)}>Eliminar</Button>
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

export default Pacientes; 