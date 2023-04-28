import { createContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, query, collection, where, addDoc, doc, setDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import GenerateNewUser from '../services/GenerateNewUser';


export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {

    //------------------------------------------------------- FIREBASE

    const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);




    //------------------------------------------------------- INICIO FUNCIONES

    useEffect(() => {

        searchCollections("seccion", "coleccion")
        buscarObjetoValor("tipo-bienestar", "0", "tipos")
        alguienLogueado()

        if (localStorage.getItem('USUARIO LOGUEADO') !== null) {
            setUser(JSON.parse(localStorage.getItem('USUARIO LOGUEADO')))
        }

    }, [])

    //------------------------------------------------------- SWEET ALERT

    const alertaSimple = (titulo, icono, botonTexto) => {
        Swal.fire({
            title: titulo,
            icon: icono,
            confirmButtonText: botonTexto,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.history.back()
                setRegistroTrueFalse(false)
            }
        })
    }

    const alertaLink = (titulo, icono, botonTexto, foot) => {
        Swal.fire({
            title: titulo,
            icon: icono,
            confirmButtonText: botonTexto,
            footer: foot // cambiar link
        })
    }


    //------------------------------------------------------- COLECCION, searchCollections

    const [aromas, setAromas] = useState([])
    const [coleccion, setColeccion] = useState([])

    const searchCollections = async (nameCollection, state) => {
        const querySnapshot = await getDocs(collection(db, nameCollection));
        const productosFirebase = []
        querySnapshot.forEach((doc) => {

            const producto = {
                id: doc.id,
                ...doc.data()
            }
            productosFirebase.push(producto)
        });

        if (state === "aromas") {
            setAromas(productosFirebase)

        } else if (state === "coleccion") {

            setColeccion(productosFirebase)
        }
    }


    //------------------------------------------------------- TIPO, buscarObjatoValor

    const [tipo, setTipo] = useState([])

    const buscarObjetoValor = async (param1, posicion, type1) => {
        const querySnapshot = await getDocs(collection(db, "seccion"));
        querySnapshot.forEach((doc) => {

            const data = doc.data()
            const bienFisEmo = data[param1][posicion][type1]

            setTipo(bienFisEmo)
        });

    }


    //------------------------------------------------------- GUARDO TITULO Y DESCRIPCION

    const [guardoProducto, setGuardoProducto] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [productoDestacado, setProductoDestacado] = useState([])

    let todosDestacados = []

    const traigoTituloProductos = (array, paramId, state) => {
        setGuardoProducto('')

        for (const key in array) {
            const produ = array[key]["productos"]

            for (const key2 in produ) {

                const tituloDelProducto = produ[key2].titulo;

                if (state === "paraAroma") {

                    if (paramId === tituloDelProducto) {
                        setGuardoProducto(array[key]["productos"][key2])
                        setDescripcion(array[key].descripcion);
                    }

                } else if (state === "paraProductoDestacado") {

                    if (paramId === tituloDelProducto) {
                        todosDestacados.push(produ[key2])
                    }
                    setProductoDestacado(todosDestacados)

                }
            }
        }
    }


    //------------------------------------------------------- PRODUCTS AROMAS, collectionByParam

    const [product, setProduct] = useState([])
    const [descripcionProducto, setDescripcionProducto] = useState([])

    const collectionByParam = async (nameCollection, param, type, state) => {
        // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR DOCUMENTOS CON PARAMETRO WHERE. USAR "param" Y "type".
        const collectionsData = await getDocs(query(collection(db, nameCollection), where(param, "==", type)));
        const collections = collectionsData.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });

        if (state === "products") {
            setProduct(collections);
        } else if (state === "descripcion") {
            setDescripcionProducto(collections)
        }
    };


    //------------------------------------------------------- QUITAR PRODUCTO

    const quitarProducto = (productoAEliminar) => {

        const sinProducto = user.carrito.filter(obj => obj !== productoAEliminar)

        setUser({ ...user, carrito: sinProducto })


        actionToFavsOrCart(user.id, '', sinProducto, "carrito")
        localStorage.setItem(`USUARIO LOGUEADO`, JSON.stringify({ ...user, carrito: sinProducto }))
    }


    //------------------------------------------------------- LOGIN

    const [user, setUser] = useState({})

    const alguienLogueado = () => {

        const item = JSON.parse(localStorage.getItem('USUARIO LOGUEADO'))

        if (item) {
            setUser(item)
        }
    }

    const logOut = () => {
        localStorage.removeItem("USUARIO LOGUEADO")
        setUser({})
    }

    //UTILIZADO PARA RECUPERAR CONTRASENA

    const getUserPass = async (mailIngresado) => {

        const cole = collection(db, "usuarios")

        const tieneRegistro = await getDocs(query(cole, where("mail", "==", mailIngresado)))
        const estaRegistrado = tieneRegistro.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });

        for (const regis of estaRegistrado) {

            return (regis.contrasena)
        }
    }

    //UTILIZADO PARA SABER SI ESTA REGISTRADO EN LA DB

    const [registroTrueFalse, setRegistroTrueFalse] = useState(false)

    const estaRegistrado = async (mailIngresado) => {

        const cole = collection(db, "usuarios")

        const tieneRegistro = await getDocs(query(cole, where("mail", "==", mailIngresado)))
        const estaRegistrado = tieneRegistro.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });

        if (estaRegistrado.length === 0) {
            //DEBE REGISTRAR
            setRegistroTrueFalse(true)

        } else if (estaRegistrado.length !== 0) {
            setRegistroTrueFalse(false)
            alertaSimple('Ya existe un usuario con este mail', "error", "CONTINUAR")
        }
    }
    //-----------------------------------------------------------------UTILIZADO PARA GOOGLE AUTH
    const [googleFaceRegistro, setGoogleFaceRegistro] = useState(false)

    const coincideMailPass = async (mailIngresado, passwordIngresado, state) => {

        const cole = collection(db, "usuarios")

        const coincideMail = await getDocs(query(cole, where("mail", "==", mailIngresado)))
        const datosUsuarioPorMail = coincideMail.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });

        const coincideLogin = await getDocs(query(cole, where("mail", "==", mailIngresado), where("contrasena", "==", passwordIngresado)))
        const existeUsuario = coincideLogin.docs.map((doc) => {

            return { id: doc.id, ...doc.data() };

        });


        if (datosUsuarioPorMail.length === 0) {


            if (state === "google" || state === "facebook") {

                setGoogleFaceRegistro(true)

            } else {

                alertaLink('No existe usuario con ese mail', "error", "VOLVER")

            }
        } else if (existeUsuario.length === 0) {

            alertaLink('Error de contraseña', "error", "CONTINUAR", '<a href="">Recuperar contraseña</a>')

        } else if (datosUsuarioPorMail.length !== 0 && existeUsuario.length !== 0) {

            //GUARDA EN LOCALHOST DATOS DEL USUARIO EN FIREBASE
            localStorage.setItem(`USUARIO LOGUEADO`, JSON.stringify(datosUsuarioPorMail[0]))
            setUser(datosUsuarioPorMail[0])
        }
    }

    const addUser = async (newUser) => {
        // AGREGAR UN NUEVO USUARIO A LA COLECCION "usuarios" CON SU CORRESPONDIENTE ARRAY.
        const usuario = await addDoc(collection(db, "usuarios"), newUser);
        const usuarioConId = ({ id: usuario.id, ...newUser });


        localStorage.setItem(`USUARIO LOGUEADO`, JSON.stringify(usuarioConId))

        return (usuarioConId[0])
    }

    const corfirmarReg = (data) => {

        const { nombreApellido, mail, contrasena, favorito, carrito } = data

        try {
            const generoNuevoUsuario = GenerateNewUser({
                nombreApellido,
                mail,
                contrasena,
                favorito,
                carrito
            })

            //GENERA NUEVO USUARIO
            addUser(generoNuevoUsuario)

            Swal.fire({
                title: 'Registro exitoso!',
                icon: "success",
                confirmButtonText: "CONTINUAR",
            }).then((res) => {
                window.location.replace("/");
            });

        } catch (error) {
            console.log(error)
        }
    }


    //------------------------------------------------------- CREAR NUEVA COLECCION ORDERS

    const addOrder = async (newOrder) => {
        const docRef = await addDoc(collection(db, "orders"), newOrder);
        return (docRef)
    }

    // PARAMETROS QUE DEBE TENER EL DOCUMENTO "USER"
    // usuarioEjemplo={
    //     nombreApellido:"",
    //     mail:"",
    //     contrasena:"",
    //     favoritos:[],
    //     carrito:[]
    // }

    //------------------------------------------------------- FAVORITOS, actionToFavsOrCart

    const actionToFavsOrCart = async (idUser, typeOf, array, state) => {
        // AGREGAR O ELIMINAR UN FAVORITO O UN PRODUCTO AL CARRITO O A LOS FAVORITOS DE CIERTO USUARIO
        const user = doc(db, 'usuarios', idUser);
        if (state === "favoritos") {
            await setDoc(user, { "favoritos": array }, { merge: true });
        } else if (state === "carrito") {
            await setDoc(user, { "carrito": array }, { merge: true });
        }
    }


    //------------------------------------------------------- EMAIL.JS

    const emailJS = async (data) => {
        // API NECESARIA PARA ENVIAR UN CORREO ELECTRONICO A CIERTO MAIL.

        // ARRAY NECESARIO DE "data"
        // const array= {
        //     nombre:"",
        //     contrasena:"",
        //     toMail:""
        // }
        emailjs.send('', '', data, "")
            .then(function (response) {
                console.log(response)
                return (true)
            }, function (error) {
                console.log(error)
                return (false)
            });
    }

    //------------------------------------------------------- PRIMERA LETRA MAYUSCULA

    function mayPrimera(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <UseApiContext.Provider value={{ googleFaceRegistro, corfirmarReg, quitarProducto, mayPrimera, productoDestacado, alertaSimple, user, setUser, addOrder, descripcion, traigoTituloProductos, guardoProducto, descripcionProducto, getUserPass, logOut, alguienLogueado, aromas, buscarObjetoValor, tipo, registroTrueFalse, setRegistroTrueFalse, estaRegistrado, coincideMailPass, searchCollections, coleccion, collectionByParam, product, setProduct, addUser, actionToFavsOrCart, emailJS }}>
            {children}
        </UseApiContext.Provider>
    );
};
