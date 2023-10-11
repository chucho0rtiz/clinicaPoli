import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Table } from 'reactstrap';
// data
// import { DataCita, DataDoctor, DataPaciente, DataTipoDoc, DataEspecialidad, DataEstado } from './../../src/data/data.ts';
import { DataDoctor, HeaderTableDataDoctor, DataTipoDoc } from './../../src/data/data.ts';

function Doctores() {
    // const [dataCita, setDataCita] = useState(DataCita);
    const [edit, setEdit] = useState(false);
    const [headerTableDataDoctor] = useState(HeaderTableDataDoctor);
    const [dataDoctor, setDataDoctor] = useState(DataDoctor);
    const [dataTipoDoc] = useState(DataTipoDoc);
    const [values, setValues] = useState({
        idDoctor: (dataDoctor[dataDoctor.length - 1].idDoctor + 1),
        idTipoDocumento: 0,
        numeroIdentificacion: '',
        nombreDoctor: '',
        apellidoDoctor: '',
        telefono: '',
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
        dataDoctor.push(values);
        setDataDoctor(dataDoctor.map(info => info))
        defaultData();
    }
    const actualizarInfo = () => {
        dataDoctor.filter((val, key) => {
            if ((val.idDoctor === values.idDoctor) === true) {
                dataDoctor[key] = values;
            }
        })
        setDataDoctor(dataDoctor.map((value) => value))
        defaultData();
    }
    const deleteOneData = (info) => {
        setDataDoctor(
            dataDoctor.filter(a =>
                a.idDoctor !== info
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
            idDoctor: (dataDoctor[dataDoctor.length - 1].idDoctor + 1),
            idTipoDocumento: 0,
            numeroIdentificacion: '',
            nombreDoctor: '',
            apellidoDoctor: '',
            telefono: '',
            correro: ''
        });
    }

    return (
        <div>
            <div className='formularioCitas'>
                <h1 className='tituloCita'>Doctores</h1>
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
                        <Label for="nombreDoctor">Nombre del Doctor</Label>
                        <Input
                            type="text"
                            name="nombreDoctor"
                            id="nombreDoctor"
                            placeholder="Nombre del Doctor"
                            value={values.nombreDoctor}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="col-4">
                        <Label for="apellidoDoctor">Apellido del Doctor</Label>
                        <Input
                            type="text"
                            name="apellidoDoctor"
                            id="apellidoDoctor"
                            placeholder="Apellido del Doctor"
                            value={values.apellidoDoctor}
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
                    dataDoctor.length > 0 ? (
                        <Table dark>
                            <thead>
                                <tr>
                                    {
                                        headerTableDataDoctor.map((info, key) => {
                                            return (<th key={key}>{info}</th>);
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataDoctor.map((info, key) => {
                                        return (
                                            <tr className={'infoData' + key}
                                                key={key}>
                                                <td>{info.idDoctor}</td>
                                                <td>{getDataTipoDoc(info.idTipoDocumento)}</td>
                                                <td>{info.numeroIdentificacion}</td>
                                                <td>{info.nombreDoctor}</td>
                                                <td>{info.apellidoDoctor}</td>
                                                <td>{info.telefono}</td>
                                                <td>{info.correro}</td>
                                                <td>
                                                    <Button className='editData' color="primary" onClick={() => editOneData(info)}>Editar</Button>
                                                    <Button color="danger" onClick={() => deleteOneData(info.idDoctor)}>Eliminar</Button>
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

export default Doctores; 