import { Res } from "../models/imput";

const callApi = async (str: string): Promise<Res> => {

  try {
    const response = await fetch(`https://nesspo.pythonanywhere.com/api/find/index?str=${str}`);
    return await response.json();
  } catch (error) {
    alert('The typed data are wrong')
    throw console.error('The typed data are wrong');
  }

}

export default callApi;
