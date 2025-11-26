// src/types/financial.ts

export interface Transaccion {
  fecha: string;
  descripcion: string;
  monto: number;
  tipo: 'ingreso' | 'gasto';
  categoria: string;
}

export interface ReporteFinanciero {
  id?: number; // Opcional si lo usas en el backend
  resumen: string;
  transacciones: Transaccion[];
  total_ingresos: number;
  total_gastos: number;
}