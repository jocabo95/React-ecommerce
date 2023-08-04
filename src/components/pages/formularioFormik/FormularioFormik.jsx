import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"; // IMPORTACION YUP NO SE HACE COMO EL RESTO

const FormularioFormik = () => {

    // useFormik entrea fn handleSubmit, handelChange
    //formik recibe un obj de configuracion
    const {handleSubmit, handleChange, errors} = useFormik({

        //obj inital values con valores que voy a almacenar
        initialValues: {
            name:"",
            email:"",
            password:"",
            repeatPassword:""
        },

        //toca especificar que toca hacer cuando se active submit.
        //SE ASIGNA A handleSubmit
        onSubmit: (data)=>{console.log(data)},

        //esquema validacion
        validationSchema: Yup.object({
            name: Yup.string().required("Este campo es obligatorio").min(2, "El nombre debe tener al menos 2 caracteres"),
            email: Yup.string().email("Email debe tener @").required(),
            password: Yup.string().required("Este campo es obligatorio").min(6, "La contraseña debe tener al menos 6 caracteres"),
            // para validar password .matches( regex, {message: "la contrasena debe tener..."})
            repeatPassword: Yup.string().required().oneOf([Yup.ref("password")],"Las contraseñas no coinciden")
        }),
        validateOnChange: false, // si no se hace en onchange se hace en onsubmit
    });

    console.log(errors)

  return (
    <div style={{ padding: "40px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          type="text"
          // propiedades deben matchear keys de initialValues (ej: name, email)
          name="name"
          error={errors.name ? true : false} // poner input bos roja si hay error en input
          onChange={handleChange}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="text"
          name="email"
          error={errors.email ? true : false}
          onChange={handleChange}
          helperText={errors.email}
        />
        <TextField
          label="Pass"
          variant="outlined"
          type="password"
          name="password"
          error={errors.password ? true : false}
          onChange={handleChange}
          helperText={errors.password}
        />
        <TextField
          label="repeta"
          variant="outlined"
          type="password"
          name="repeatPassword"
          error={errors.repeatPassword ? true : false}
          onChange={handleChange}
          helperText={errors.repeatPassword}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default FormularioFormik;