import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/button/Button"
import Input from "../../components/input/Input"
import useAuth from "../../hooks/useAuth"
import validator from 'validator'


const Signup = () => {
  const {signup} = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("")
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if(!email | !emailConf | !senha){
      setError("Preencha todos os Campos")
      return;
    }else if( email !== emailConf) {
      setError("Os Emails devem ser iguais")
      return;
    }

    if(!validator.isEmail(email)){
      setError("Esse E-mail não é válido")
      return;
    }

    const res = signup(email, senha);

    if(res) {
      setError(res)
      return;
    }

    alert("Usuário Cadastrado com sucesso!")
    navigate("/")
  }
  

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-8">
        <label className="text-lg font-semibold text-white font-julius ">DoList</label>
      <div className="gap-4 p-8 flex items-center justify-center flex-col w-full bg-white max-w-[350px] rounded-lg">
        <h2 className="font-montserrat">Cadastrar-se</h2>
        <form action="" className="">
          <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e)=> [setEmail(e.target.value), setError("")]}/>
          <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e)=> [setEmailConf(e.target.value), setError("")]}/>
          <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e)=> [setSenha(e.target.value), setError("")]}/>
          <label className="text-md text-red-600">{error}</label>
          <Button Text="Resgistrar-se" onClick={handleSignup} />
        </form>



        <div className="flex flex-col items-center gap-2">
          <label className="text-md text-gray-700">Já tem uma Conta ?</label>
          <Link to='/' className="no-underline text-white p-1 bg-softBlue hover:bg-slate-400 duration-300 rounded-md  ">Entre aqui</Link>
        </div>
      </div>
    </div>
  )
}


export default Signup
