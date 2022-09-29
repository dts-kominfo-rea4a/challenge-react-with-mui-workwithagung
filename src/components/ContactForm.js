// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {Button, Card, CardActions, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import {useState} from "react";

const ContactForm = ({addNewContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [photo, setPhoto] = useState("")

    const localAddContact = () => {
        addNewContact({
            name: name,
            phone: phone,
            photo: photo,
            email: email,
        })

        setName("")
        setPhone("")
        setEmail("")
        setPhoto("")
    }

    return (
        <Card>
            <CardHeader title="Add New Contact"></CardHeader>
            <CardContent>
                <form action="">
                    <Stack spacing={2}>
                        <TextField name="name" label="Name" value={name} onChange={(event) => setName(event.target.value)}></TextField>
                        <TextField name="phone" label="Phone" type="text" value={phone} onChange={event => setPhone(event.target.value)}></TextField>
                        <TextField name="email" label="Email" type="text" value={email} onChange={event => setEmail(event.target.value)}></TextField>
                        <TextField name="photo" label="Photo URL" type="text" value={photo} onChange={event => setPhoto(event.target.value)}></TextField>
                    </Stack>
                </form>
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={localAddContact}>Save</Button>
            </CardActions>
        </Card>
    );
}

export default ContactForm;