
const GenerateOrderObject = ({
    id = "",
    nombreApe = "",
    mail = "",
    cart = []
}) => {
    return {
        buyer: {
            id: id,
            nombreApe: nombreApe,
            mail: mail,
        },
        item: cart
        ,
        createdAd: new Date().toLocaleString()
    }
}

export default GenerateOrderObject