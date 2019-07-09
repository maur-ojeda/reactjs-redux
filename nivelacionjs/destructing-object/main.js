//object destructing

const servicios = {
    api : {},
    mailer : 'soy mailer',
    apollo : 'soy apollo',
}
const enviarCorreo = ({mailer}) => {
    console.log(mailer)
}
enviarCorreo(servicios)


 

const enviarCorreo2 = (srs) => {
    const { apollo } = srs
    console.log(apollo)
}
enviarCorreo2(servicios)