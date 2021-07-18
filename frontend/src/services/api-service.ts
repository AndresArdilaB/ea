import { Res } from "../models/imput";

const callApi = async (str: string): Promise<Res> => {

  try {
    const response = await fetch(`https://nesspo.pythonanywhere.com/api/find/index?str=${str}`);
    return await response.json();
  } catch (error) {
    throw console.error(error);
  }

}

export default callApi;
