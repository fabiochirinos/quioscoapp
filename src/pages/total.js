import Layout from "../../layout/Layout";
import useQuiosco from "../../hooks/useQuiosco";
import { formatearDinero } from "../../helpers";

export default function Total() {

  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

  const comprobarPedido = () => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  }


  return (
    <Layout pagina='Total y confirmar pedido'>
      <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

      <form
        onSubmit={colocarOrden}
      >
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>

          <input
            id="nombre"
            type="text"
            className="bg-gray-200 w-full lg:w1/3 mt-3 p-2 rounded"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {''} <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${comprobarPedido() ? 'bg-indigo-300 hover:cursor-not-allowed' : 'bg-indigo-600 hover:cursor-pointer'} mt-5 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center outline-none`}
            value="Confirmar pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  )
}
