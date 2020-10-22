import { motion } from 'framer-motion';
import React, { Component } from 'react';
import Link from 'next/link'
import { fireAuth } from '../../firebase.utils'
import Errormsg from '../../components/ui/Errormsg.component';
import TextField from '../../components/ui/TextField.component';
import AuthLayout from '../../components/layouts/AuthLayout.component';
import Button from '../../components/ui/Button.component';
import Media from '../../components/ui/Media.component';
import { Links } from '../../components/commons/Links';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
class SignUp extends Component {
    state={
        username : '',
        email : '',
        password : '',
        confpass : '',
        phoneNumber : '',
        loading : false,
        errors : {
            username : '',
            password : '',
            phoneNumber : '',
        }
    }
    changeHandler = (event) => {
        event.preventDefault();
        const { id,value } = event.target
        const errors = this.state.errors
        switch(id){
            case 'username':
                errors.username = value < 2 ? 
                "Enter a valid name!" : ""
                break;
            case 'password' : 
                errors.password = value < 7 ?
                "Your password should be atleast 6 characters long!" : ""
                break;
            case 'phoneNumber' :
                errors.phoneNumber = value < 8 ?
                "Enter a valid number!" : ""
            default : break;

        }
        this.setState({ [id] : value ,errors})
        console.log(event.target)
    }
    handleSubmit(event){
        event.preventDefault();
        if(validateForm(this.state.errors)){
            fireAuth.createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(user => {
                console.log(user);
            })
            .catch(err => {
                console.log(err)
            })
            this.setState({
                username : '',
                email : '',
                password : '',
                confpass : '',
                phoneNumber : '',
                loading : false,
                errors : {
                    username : '',
                    email : '',
                    password : '',
                    confpass : '',
                    phoneNumber : '',
                }
            })
        }
    }
  render() {
    const { username,email,password,confpass,phoneNumber,errors } = this.state
    const h1_motion = {
        from : {
            scale : 1
        },
        to : {
            scale : 1,
            transition: {
                staggerChildren : 0.2,
            }
        }
    }
    const h1_children = {
        from : {
            y : 96
        },
        to : {
            y : 0,
            transition : {
                duration : 0.3,
                ease : "easeInOut",
                type : 'spring',
                stiffness : 150
            }
        }
    }
    const h2_motion ={
        from : {
            y : 20,
            opacity : 0
        },
        to : {
            y : 0,
            opacity : 1,
            transition : {
                duration : 0.8,
                ease : "easeInOut",
            }
        }
    }
    const headers = words => {
        const header = words.split(' ')
        return header.map( word => {
            return <motion.span
            variants={h1_children}
            className={word === header[header.length - 1] ? `text-gray-100` : `text-purple-300`} 
            key={word}>
                {word}
            </motion.span>
        })
    }
    return (
     <AuthLayout
     captions={
         <>
            <motion.h1 
            variants = {h1_motion}
            initial = "from"
            animate = "to"
            className="text-6xl font-bold uppercase flex gap-4 m-0 tracking-wider overflow-hidden">
                {headers('join chatly!')}
            </motion.h1>
            <motion.h2
            variants = {h2_motion} 
            initial ="from"
            animate = "to"
            className="text-gray-100 text-sm self-center m-0 opacity-75 tracking-wider">
                A freeware messaging platform built by <span className="font-extrabold opacity-1">Sayantan.</span>
            </motion.h2>
            <motion.h3 
              variants = {h2_motion} 
              initial ="from"
              animate = "to"
            className="text-gray-100 font-medium my-8 flex items-center gap-2 opacity-75">
                <span className="w-32 h-px bg-gray-100" />
                <span>Find us on</span> 
                <span className="w-32 h-px bg-gray-100" />
            </motion.h3>
            <motion.div 
            initial="from"
            animate ="to"
            className="flex gap-8 overflow-hidden">
                {
                    Links.map(link =>(
                        <Media key={link.link} {...link} />
                    ))
                }
            </motion.div>
         </>
     }
     headers={
         <>
            <h1
            className="text-5xl font-bold text-gray-700 m-0">
               Create an account.
            </h1>
            <h2 className="m-0 text-gray-500">
                Join <span className="text-purple-400 font-bold">Chatly</span> by just filling up this simple form.
            </h2>
        </>
     } 
     formHandler={this.handleSubmit}>
                    <TextField 
                     type="text"
                     placeholder="David Blake"
                     value={username}
                     id="username"
                     inpHandler ={this.changeHandler}
                     children={errors.username ? <Errormsg title={errors.username}/> : ""}
                     />
                     <TextField
                      type="email"
                      placeholder="dBlake@gmail.com"
                      id="email"
                      value={email}
                      inpHandler ={this.changeHandler}
                      />
                      <TextField
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      inpHandler={this.changeHandler} 
                      children= {errors.password ? <Errormsg title={errors.password}/> : ""}
                      />
                      <TextField
                      type="password"
                      id="confpass"
                      placeholder="Confirm password"
                      value={confpass}
                      inpHandler={this.changeHandler} 
                      />
                    <TextField
                        type="text"
                        id="phoneNumber"
                        placeholder="Phone No."
                        value={phoneNumber}
                        inpHandler={this.changeHandler} 
                        children={errors.phoneNumber ? <Errormsg title={errors.phoneNumber}/> : null}
                        />
                    <Button classes="w-full self-center">Register</Button>
                    <div className="text-center mt-4 font-medium justify-self-end">
                        <span className="text-gray-500">Already a user?</span>
                            <Link href="/auth/Login">
                                <span className="text-right text-secondary cursor-pointer outline-none"> Please Login</span>
                            </Link>
                    </div>
     </AuthLayout>
    );
  }
}

export default SignUp;
