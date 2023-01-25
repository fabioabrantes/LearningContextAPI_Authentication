import {useMyContext} from '../context/AuthProvider';
import {AuthRoutes} from './routes.publics';
import {RoutesPrivadas} from './routes.privates';


export function Routes(){
  const {isLogado} = useMyContext();
  console.log(isLogado);
  return isLogado ? <RoutesPrivadas /> : <AuthRoutes />
}