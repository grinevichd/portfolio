import React, {ChangeEvent, useState} from 'react';
import style from './Сontacts.module.css'
import styleContainer from '../common/style/Container.module.css'
import styleButton from '../common/style/Button.module.css'
import {Title} from "../common/compomemts/title/Title";
import {Fade} from 'react-awesome-reveal';
import {sendMessage} from "../Api/Api";
import loader from '../assets/image/loader.svg'
import {Notification} from "../common/compomemts/Notification/Notification";
import {toast} from "react-toastify";

export const Сontacts = () => {

    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)
    const [emailValue, setEmailValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [messageValue, setMessageValue] = useState('')
    const [waitResult, setWaitResult] = useState(false)

    const buttonStyle = waitResult ? `${style.button}` : `${styleButton.button} ${style.button}`


    const getParams = async () => {

        const form = document.querySelector('#form')

        const formData = new FormData(form as any)
        const name = formData.get('Name')
        const email = formData.get('Email')
        const message = formData.get('Message')
        if (!name) {
            setErrorName(true)
        }
        if (!message) {
            setErrorMessage(true)

        }
        if (!email) {
            setErrorEmail("This field is required")
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue)) {
            setErrorEmail("Invalid email address")
            return

        }

        if (!email || !name || !message) {

            return
        }
        if (email && name && message) {
            setErrorName(false)
            setErrorEmail('')
            setErrorMessage(false)
            setWaitResult(true)
        }
        await sendMessage({name, email, message})
        toast.success('Message sent success',{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        setEmailValue("")
        setNameValue("")
        setMessageValue("")
        setWaitResult(false)

    }

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorName(false)
        setNameValue(e.currentTarget.value)
    }
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorEmail('')
        setEmailValue(e.currentTarget.value)
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setErrorMessage(false)
        setMessageValue(e.currentTarget.value)
    }

    return (
        <div className={style.contactsContainer}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <Title title={"Get In Touch"}/>
                <div id={'contact'} className={style.formBlock}>
                    <Fade delay={300}>
                        <form className={style.formContainer} id={"form"}>
                            <input onChange={onChangeNameHandler} value={nameValue} type="text" placeholder={"Name"}
                                   name={"Name"}/>
                            {errorName ? <div className={style.errorMessage}>This field is required</div>  : <div style={{height:21}}/>}
                            <input onChange={onChangeEmailHandler} value={emailValue} type="text" placeholder={"Email"}
                                   name={"Email"}/>
                            {errorEmail ? <div className={style.errorMessage}>{errorEmail}</div> : <div style={{height:21}}/>}
                            <textarea onChange={onChangeMessageHandler} value={messageValue} placeholder={"Message"}
                                      name={"Message"}>
                    </textarea>
                            {errorMessage ? <div className={style.errorMessage}>This field is required</div> : <div style={{height:21}}/>}

                                <button disabled={waitResult} type='button' onClick={getParams}
                                        className={buttonStyle}>{waitResult ?
                                    <img src={loader} alt=""/>   : <span
                                    className={styleButton.textButton}>Send message</span> }</button>



                        </form>
                    </Fade>
                </div>


            </div>
            <Notification/>
        </div>
    );
};

