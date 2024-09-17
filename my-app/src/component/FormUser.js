import React, {useState,useEffect} from 'react';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';


const FormUser = (props) => {
    const [users,setUsers] = useState ([]);
    const {values,touched,errors,status} = props;
    useEffect( () => {
        if (status) {
            setUsers([...users,status]);
        }
    }, [status])
    return (
        <Form>
            {touched.name && errors.name && <p className="error">(errors.name)</p>}
            <Field  type="text" name="name" placeholder="Your name"/>
            {touched.password && errors.password && <p classPassword="error">(errors.password)</p>}
            <Field type="password" name="password" placeholder="password"/>
            <button data-testid="submit" type="submit">Submit</button>
            {users.map(user => <div key={user.id}>{JSON.stringify(user)}</div>)}
        </Form>
    );
};


const FormikForm = withFormik({
    mapPropsToValues: ({name,password }) => {
        return {
            name: name || "",
            password: password || "",
        };
    },
    validationSchema: yup.object().shape({ 
        name: yup.string()
            .required(),
            password:yup.string()
            .min(4,"Password must be 4 characters")
            .required()
    }),
    handleSubmit: (values,{resetForm}) => {
        axios.post("https://reqres.in/api/users",values)
        .then(res => {
            resetForm();
        })
        .catch(error => {
            console.log(error);
        });
    }
})(FormUser);


export default FormikForm;