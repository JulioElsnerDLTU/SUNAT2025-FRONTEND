export interface Client {
  id: number;
  name: string;
  ruc: string;
  status: boolean;
  image: string;
  codigo_seguimiento: string;
  address: string;
  TipoEmpresa: string;
  declaracion_renta: string;
  reminders: any[];
}
