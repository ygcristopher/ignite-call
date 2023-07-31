import { Button, TextInput } from "@ignite-ui/react";
import { Form } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { z } from "zod";


const claimUsernameFormSchema = z.object({
    username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimusernameForm() {
    const { register, handleSubmit } = useForm()

    async function handleClaimUsername(data: any) {
        console.log(data)
    }

    return(
        <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
            <TextInput 
             size="sm"
             prefix="ignite.com/"
             placeholder="seu-usuário"
             {...register('username')}
            />
            <Button size= "sm" type="submit">
                Reservar usuário
                <ArrowRight/>
            </Button>
        </Form>
    )
}