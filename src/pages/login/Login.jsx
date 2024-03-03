import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/button/Button"
import Input from "../../components/input/Input"
import useAuth from "../../hooks/useAuth"

const Login = () => {
  const {signin} = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async () => {
    if(!email || !senha){
      setError("Preencha  todos os campos!");
      setTimeout(()=>{
        setError("")
      }, 3000)
      return;
    }

    const res = await signin(email, senha);

    if (res === true) {
      navigate('/home')
    }else {
      setError(res)
    }

  }

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-8">

        <label className="text-lg font-semibold text-white font-julius ">DoList</label>

      <div className="gap-8 p-8 flex items-center justify-center flex-col w-full bg-white max-w-[350px]  rounded-lg">
          <h2 className="text-center font-montserrat">Entrar</h2>
        <form action="">

          <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e)=> [setEmail(e.target.value), setError("")]}/>

          <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e)=> [setSenha(e.target.value), setError("")]}/>

          <label className="text-md text-red-600">{error}</label>

          <Button Text="Entrar" onClick={handleLogin} />
        </form>



        <div className="flex flex-col items-center gap-2">
          <label className="text-md text-gray-700 font-montserrat">Não tem uma Conta ?</label>

          <Link to='/signup' className="no-underline text-white p-1 bg-softBlue hover:bg-slate-400 duration-300 rounded-md font-montserrat  ">Registre-se</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
