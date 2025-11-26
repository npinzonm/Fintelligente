// src/api/mockData.ts (Nuevo archivo)

import type { ReporteFinanciero } from "../types/financial"; 

export const mockReporte: ReporteFinanciero = {
    "resumen": "El extracto de octubre de 2025 de Nathalie Rocio Pinzon Morales muestra una actividad financiera muy dinámica, con un alto volumen de ingresos y gastos. Se destaca una gestión proactiva del dinero, con una parte significativa destinada a Ahorro e Inversión, así como transferencias a terceros. Los gastos de consumo en alimentación y servicios son recurrentes. El saldo final del mes ha experimentado un ligero incremento, lo que sugiere una gestión general positiva, aunque con fuertes compromisos financieros y de asignación de capital.",
    "transacciones": [
        {
            "fecha": "2025-10-01",
            "descripcion": "Compra HELP HBOMAX COM FRANQUICIA MASTER CARD",
            "monto": 14950.0,
            "tipo": "gasto",
            "categoria": "Entretenimiento"
        },
        {
            "fecha": "2025-10-02",
            "descripcion": "Compra NOVAVENTA BOG CODIGO M FRANQUICIA MASTER CARD",
            "monto": 4500.0,
            "tipo": "gasto",
            "categoria": "Compras varias"
        },
        {
            "fecha": "2025-10-02",
            "descripcion": "Transferencia de Dinero a Bolsillo App Davivienda",
            "monto": 2098900.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-02",
            "descripcion": "Transferencia de Dinero a Bolsillo App Davivienda",
            "monto": 215000.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-02",
            "descripcion": "Compra EXITO LAS NIEVES FRANQUICIA MASTER CARD",
            "monto": 16200.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-02",
            "descripcion": "Debito Automatico Al Bolsillo BTA PROCESOS ESP.",
            "monto": 20000.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-02",
            "descripcion": "Transferencia Enviada Con Llave REDEBAN",
            "monto": 250000.0,
            "tipo": "gasto",
            "categoria": "Transferencia a terceros"
        },
        {
            "fecha": "2025-10-03",
            "descripcion": "Compra FONDO DE INVERSIÓN COLE Compras y Pagos PSE",
            "monto": 10210.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-03",
            "descripcion": "Transferencia BBVA 901780713 PROCESOS ACH",
            "monto": 250000.0,
            "tipo": "ingreso",
            "categoria": "Transferencia recibida"
        },
        {
            "fecha": "2025-10-03",
            "descripcion": "Abono De Bolsillo A Cuenta App Davivienda",
            "monto": 2098900.0,
            "tipo": "ingreso",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-03",
            "descripcion": "Cobro Transf. Enviada Otra Entidad App Davivienda",
            "monto": 7980.0,
            "tipo": "gasto",
            "categoria": "Comisiones bancarias"
        },
        {
            "fecha": "2025-10-03",
            "descripcion": "Dcto.transferencia otra entidad BOGOTA 1030630810 App Davivienda",
            "monto": 1100000.0,
            "tipo": "gasto",
            "categoria": "Transferencia a terceros"
        },
        {
            "fecha": "2025-10-03",
            "descripcion": "Compra AVAL VALOR COMPARTIDO S Compras y Pagos PSE",
            "monto": 130000.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-03",
            "descripcion": "Descuento Por Transferencia De Fondos 550488439838423 1030630810 App Davivienda",
            "monto": 858900.0,
            "tipo": "gasto",
            "categoria": "Transferencia a terceros"
        },
        {
            "fecha": "2025-10-03",
            "descripcion": "Compra CAJA DE COMPENSACION FA Compras y Pagos PSE",
            "monto": 153930.0,
            "tipo": "gasto",
            "categoria": "Servicios"
        },
        {
            "fecha": "2025-10-03",
            "descripcion": "Compra OSAKI 89 FRANQUICIA MASTER CARD",
            "monto": 88621.0,
            "tipo": "gasto",
            "categoria": "Compras varias"
        },
        {
            "fecha": "2025-10-04",
            "descripcion": "Nota Debito Compras Qr P2M Daviplata QR Interoperable",
            "monto": 15000.0,
            "tipo": "gasto",
            "categoria": "Compras varias"
        },
        {
            "fecha": "2025-10-04",
            "descripcion": "Compra DLO*Didi FRANQUICIA MASTER CARD",
            "monto": 10700.0,
            "tipo": "gasto",
            "categoria": "Transporte"
        },
        {
            "fecha": "2025-10-04",
            "descripcion": "Transferencia Enviada Con Llave REDEBAN",
            "monto": 50000.0,
            "tipo": "gasto",
            "categoria": "Transferencia a terceros"
        },
        {
            "fecha": "2025-10-04",
            "descripcion": "Compra COMPENSAR FRANQUICIA MASTER CARD",
            "monto": 6200.0,
            "tipo": "gasto",
            "categoria": "Servicios"
        },
        {
            "fecha": "2025-10-04",
            "descripcion": "Compra REDH NQS 104 FRANQUICIA MASTER CARD",
            "monto": 30000.0,
            "tipo": "gasto",
            "categoria": "Compras varias"
        },
        {
            "fecha": "2025-10-05",
            "descripcion": "Compra LA OLLA CRIOLLA PASEO FRANQUICIA MASTER CARD",
            "monto": 35000.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-05",
            "descripcion": "Compra PASEO CINMAT FRANQUICIA MASTER CARD",
            "monto": 61200.0,
            "tipo": "gasto",
            "categoria": "Entretenimiento"
        },
        {
            "fecha": "2025-10-05",
            "descripcion": "Compra CENTRO COMERCIAL PASEO FRANQUICIA MASTER CARD",
            "monto": 3300.0,
            "tipo": "gasto",
            "categoria": "Compras varias"
        },
        {
            "fecha": "2025-10-06",
            "descripcion": "Transferencia CITIBANK 9006822583 OBO DIDI CO DRIVER PAYO PROCESOS ACH",
            "monto": 59989.0,
            "tipo": "ingreso",
            "categoria": "Ingresos adicionales"
        },
        {
            "fecha": "2025-10-06",
            "descripcion": "Transferencia BANCOLOMBIA 901463529 BIG ADS SAS PROCESOS ACH",
            "monto": 150000.0,
            "tipo": "ingreso",
            "categoria": "Ingresos adicionales"
        },
        {
            "fecha": "2025-10-07",
            "descripcion": "Pago De Servicio App Davivienda",
            "monto": 29790.0,
            "tipo": "gasto",
            "categoria": "Servicios"
        },
        {
            "fecha": "2025-10-07",
            "descripcion": "Transferencia CITIBANK 9012438630 PPMDE LRMK34DN9MBEWI9 PROCESOS ACH",
            "monto": 12425.0,
            "tipo": "ingreso",
            "categoria": "Transferencia recibida"
        },
        {
            "fecha": "2025-10-09",
            "descripcion": "Compra CENTRO COMERCIAL PASEO FRANQUICIA MASTER CARD",
            "monto": 2200.0,
            "tipo": "gasto",
            "categoria": "Compras varias"
        },
        {
            "fecha": "2025-10-09",
            "descripcion": "Compra EDS PALMAS FR FRANQUICIA MASTER CARD",
            "monto": 20000.0,
            "tipo": "gasto",
            "categoria": "Transporte"
        },
        {
            "fecha": "2025-10-10",
            "descripcion": "Abono De Bolsillo A Cuenta App Davivienda",
            "monto": 237000.0,
            "tipo": "ingreso",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-10",
            "descripcion": "Compra Emermedica S.A. Compras y Pagos PSE",
            "monto": 107572.0,
            "tipo": "gasto",
            "categoria": "Salud"
        },
        {
            "fecha": "2025-10-10",
            "descripcion": "Pago MOVISTAR MOVIL Y FIJO 0688007531 App Davivienda",
            "monto": 132991.0,
            "tipo": "gasto",
            "categoria": "Servicios"
        },
        {
            "fecha": "2025-10-10",
            "descripcion": "Transferencia de Dinero a Bolsillo App Davivienda",
            "monto": 300000.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-10",
            "descripcion": "Compra GRUPO TCW FRANQUICIA MASTER CARD",
            "monto": 35800.0,
            "tipo": "gasto",
            "categoria": "Compras varias"
        },
        {
            "fecha": "2025-10-10",
            "descripcion": "Compra TIENDA D1 ECOTEK 99 FRANQUICIA MASTER CARD",
            "monto": 16550.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-11",
            "descripcion": "Abono De Bolsillo A Cuenta App Davivienda",
            "monto": 25000.0,
            "tipo": "ingreso",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-11",
            "descripcion": "Nd Transf P2P Cta A Otros Ent Bre B Redeban BreB",
            "monto": 30000.0,
            "tipo": "gasto",
            "categoria": "Transferencia a terceros"
        },
        {
            "fecha": "2025-10-11",
            "descripcion": "Abono De Bolsillo A Cuenta App Davivienda",
            "monto": 70000.0,
            "tipo": "ingreso",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-11",
            "descripcion": "Retiro en Cajero Automatico. MULTISER PASEO VILLA DEL",
            "monto": 70000.0,
            "tipo": "gasto",
            "categoria": "Retiro de efectivo"
        },
        {
            "fecha": "2025-10-13",
            "descripcion": "Abono De Bolsillo A Cuenta App Davivienda",
            "monto": 30000.0,
            "tipo": "ingreso",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-13",
            "descripcion": "Compra EDS CALASANZ FRANQUICIA MASTER CARD",
            "monto": 20000.0,
            "tipo": "gasto",
            "categoria": "Transporte"
        },
        {
            "fecha": "2025-10-14",
            "descripcion": "Abono De Bolsillo A Cuenta App Davivienda",
            "monto": 100000.0,
            "tipo": "ingreso",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-14",
            "descripcion": "Nd Transf P2P Cta A Otros Ent Bre B Redeban BreB",
            "monto": 100000.0,
            "tipo": "gasto",
            "categoria": "Transferencia a terceros"
        },
        {
            "fecha": "2025-10-14",
            "descripcion": "Compra FONDO DE INVERSIÓN COLE Compras y Pagos PSE",
            "monto": 10210.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-15",
            "descripcion": "Abono De Bolsillo A Cuenta App Davivienda",
            "monto": 20000.0,
            "tipo": "ingreso",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-15",
            "descripcion": "Compra EDS LOS ANGELES BTA FRANQUICIA MASTER CARD",
            "monto": 30000.0,
            "tipo": "gasto",
            "categoria": "Transporte"
        },
        {
            "fecha": "2025-10-15",
            "descripcion": "Abono Uso Adelanto De Nomina App Davivienda",
            "monto": 100000.0,
            "tipo": "ingreso",
            "categoria": "Adelanto de nómina"
        },
        {
            "fecha": "2025-10-15",
            "descripcion": "Transferencia de Dinero a Bolsillo App Davivienda",
            "monto": 65000.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-15",
            "descripcion": "Abono De Bolsillo A Cuenta App Davivienda",
            "monto": 25000.0,
            "tipo": "ingreso",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-15",
            "descripcion": "Compra ANTONELLY 99 FRANQUICIA MASTER CARD",
            "monto": 40400.0,
            "tipo": "gasto",
            "categoria": "Compras varias"
        },
        {
            "fecha": "2025-10-16",
            "descripcion": "Nc Abono Por Uso De Credito App Davivienda",
            "monto": 500000.0,
            "tipo": "ingreso",
            "categoria": "Préstamo/Crédito"
        },
        {
            "fecha": "2025-10-16",
            "descripcion": "Compra Empresa de Acueducto y Compras y Pagos PSE",
            "monto": 273720.0,
            "tipo": "gasto",
            "categoria": "Servicios"
        },
        {
            "fecha": "2025-10-17",
            "descripcion": "Compra SURTIFRUVER ABASTOS PL FRANQUICIA MASTER CARD",
            "monto": 26300.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-18",
            "descripcion": "Compra DOLLARCITY PASEO VILLA FRANQUICIA MASTER CARD",
            "monto": 46500.0,
            "tipo": "gasto",
            "categoria": "Compras varias"
        },
        {
            "fecha": "2025-10-18",
            "descripcion": "Retiro en Cajero Automatico. PASEO VILLA DEL RIO II",
            "monto": 50000.0,
            "tipo": "gasto",
            "categoria": "Retiro de efectivo"
        },
        {
            "fecha": "2025-10-18",
            "descripcion": "Compra TIENDA D1 BOG AUTOPIST FRANQUICIA MASTER CARD",
            "monto": 78640.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-19",
            "descripcion": "Abono De Bolsillo A Cuenta App Davivienda",
            "monto": 75000.0,
            "tipo": "ingreso",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-19",
            "descripcion": "Compra LA VILLA DEL POLLO PAS FRANQUICIA MASTER CARD",
            "monto": 52500.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-19",
            "descripcion": "Compra EL CARNAL VILLA DEL RI FRANQUICIA MASTER CARD",
            "monto": 48300.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-19",
            "descripcion": "Abono De Bolsillo A Cuenta App Davivienda",
            "monto": 143034.0,
            "tipo": "ingreso",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-19",
            "descripcion": "Compra GODADDY DL FRANQUICIA MASTER CARD",
            "monto": 139999.0,
            "tipo": "gasto",
            "categoria": "Servicios digitales"
        },
        {
            "fecha": "2025-10-20",
            "descripcion": "Compra en comercio internacional FRANQUICIA CONEX MASTER",
            "monto": 3900.0,
            "tipo": "gasto",
            "categoria": "Compras internacionales"
        },
        {
            "fecha": "2025-10-20",
            "descripcion": "Transferencia CITIBANK 9006822583 OBO DIDI CO DRIVER PAYO PROCESOS ACH",
            "monto": 41939.0,
            "tipo": "ingreso",
            "categoria": "Ingresos adicionales"
        },
        {
            "fecha": "2025-10-20",
            "descripcion": "Compra CARNES DEL ORIENTE A M FRANQUICIA MASTER CARD",
            "monto": 19100.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-20",
            "descripcion": "Compra CITY PARKING UNIV CENT FRANQUICIA MASTER CARD",
            "monto": 4000.0,
            "tipo": "gasto",
            "categoria": "Transporte"
        },
        {
            "fecha": "2025-10-21",
            "descripcion": "Transferencia CITIBANK 9012438630 PPMDE LZ5980P1N0TSWXQ PROCESOS ACH",
            "monto": 16201.0,
            "tipo": "ingreso",
            "categoria": "Transferencia recibida"
        },
        {
            "fecha": "2025-10-21",
            "descripcion": "Nc Transf P2P Otras Ent A Cta Dav Breb Redeban BreB",
            "monto": 1500000.0,
            "tipo": "ingreso",
            "categoria": "Transferencia recibida"
        },
        {
            "fecha": "2025-10-21",
            "descripcion": "Compra BANCO FALABELLA S A Compras y Pagos PSE",
            "monto": 1500000.0,
            "tipo": "gasto",
            "categoria": "Deudas/Financiero"
        },
        {
            "fecha": "2025-10-21",
            "descripcion": "Compra EXITO WOW VILLAMAYOR FRANQUICIA MASTER CARD",
            "monto": 1000.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-22",
            "descripcion": "Compra SURTIFRUVER ABASTOS PL FRANQUICIA MASTER CARD",
            "monto": 15200.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-22",
            "descripcion": "Compra CITY PARKING UNIV CENT FRANQUICIA MASTER CARD",
            "monto": 5400.0,
            "tipo": "gasto",
            "categoria": "Transporte"
        },
        {
            "fecha": "2025-10-23",
            "descripcion": "Nd Transf P2P Cta A Otros Ent Bre B Redeban BreB",
            "monto": 20000.0,
            "tipo": "gasto",
            "categoria": "Transferencia a terceros"
        },
        {
            "fecha": "2025-10-23",
            "descripcion": "Nc Transf P2P Otras Ent A Cta Dav Breb Redeban BreB",
            "monto": 850000.0,
            "tipo": "ingreso",
            "categoria": "Transferencia recibida"
        },
        {
            "fecha": "2025-10-23",
            "descripcion": "Compra SURTIFRUVER ABASTOS PL FRANQUICIA MASTER CARD",
            "monto": 15350.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-23",
            "descripcion": "Compra Patrimonio Autonomo Fid Compras y Pagos PSE",
            "monto": 809733.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-23",
            "descripcion": "Compra CITY PARKING UNIV CENT FRANQUICIA MASTER CARD",
            "monto": 3700.0,
            "tipo": "gasto",
            "categoria": "Transporte"
        },
        {
            "fecha": "2025-10-24",
            "descripcion": "Compra SURTIFRUVER ABASTOS PL FRANQUICIA MASTER CARD",
            "monto": 19000.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-27",
            "descripcion": "Nc Transf P2P Otras Ent A Cta Dav Breb Redeban BreB",
            "monto": 103300.0,
            "tipo": "ingreso",
            "categoria": "Transferencia recibida"
        },
        {
            "fecha": "2025-10-27",
            "descripcion": "Compra SURTIFRUVER ABASTOS PL FRANQUICIA MASTER CARD",
            "monto": 26500.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-27",
            "descripcion": "Compra FONDO DE INVERSIÓN COLE Compras y Pagos PSE",
            "monto": 10210.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-28",
            "descripcion": "Compra SURTIFRUVER ABASTOS PL FRANQUICIA MASTER CARD",
            "monto": 25350.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-28",
            "descripcion": "Compra DLO*help.hbomax.com FRANQUICIA MASTER CARD",
            "monto": 14950.0,
            "tipo": "gasto",
            "categoria": "Entretenimiento"
        },
        {
            "fecha": "2025-10-29",
            "descripcion": "Compra SURTIFRUVER ABASTOS PL FRANQUICIA MASTER CARD",
            "monto": 12250.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-29",
            "descripcion": "Nc Transf P2P Otras Ent A Cta Dav Breb Redeban BreB",
            "monto": 30000.0,
            "tipo": "ingreso",
            "categoria": "Transferencia recibida"
        },
        {
            "fecha": "2025-10-29",
            "descripcion": "Retiro en Cajero Automatico. PASEO VILLA DEL RIO II",
            "monto": 20000.0,
            "tipo": "gasto",
            "categoria": "Retiro de efectivo"
        },
        {
            "fecha": "2025-10-30",
            "descripcion": "Nc Transf P2P Otras Ent A Cta Dav Breb Redeban BreB",
            "monto": 25000.0,
            "tipo": "ingreso",
            "categoria": "Transferencia recibida"
        },
        {
            "fecha": "2025-10-30",
            "descripcion": "Compra SURTIFRUVER ABASTOS PL FRANQUICIA MASTER CARD",
            "monto": 18900.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-30",
            "descripcion": "Pago Adelanto Nomina BTA PROCESOS ESP.",
            "monto": 114880.0,
            "tipo": "gasto",
            "categoria": "Deudas/Financiero"
        },
        {
            "fecha": "2025-10-30",
            "descripcion": "Abono En Cuenta Por Pago de Nomina 9008438821 PAGO DE NOMINA PORTAL PYMES",
            "monto": 3385480.0,
            "tipo": "ingreso",
            "categoria": "Nómina"
        },
        {
            "fecha": "2025-10-30",
            "descripcion": "Compra DLO*Netflix.com FRANQUICIA MASTER CARD",
            "monto": 29900.0,
            "tipo": "gasto",
            "categoria": "Entretenimiento"
        },
        {
            "fecha": "2025-10-31",
            "descripcion": "Traslado rendimientos a Bolsillo BTA PROCESOS ESP.",
            "monto": 20.7,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-31",
            "descripcion": "Compra PAN Y DUL DULCES MOMEN FRANQUICIA MASTER CARD",
            "monto": 12000.0,
            "tipo": "gasto",
            "categoria": "Alimentación"
        },
        {
            "fecha": "2025-10-31",
            "descripcion": "Compra AVAL VALOR COMPARTIDO S Compras y Pagos PSE",
            "monto": 75000.0,
            "tipo": "gasto",
            "categoria": "Ahorro e Inversión"
        },
        {
            "fecha": "2025-10-31",
            "descripcion": "Rendimientos Financieros.",
            "monto": 57.06,
            "tipo": "ingreso",
            "categoria": "Rendimientos financieros"
        },
        {
            "fecha": "2025-10-31",
            "descripcion": "Gravamen a los Movimientos Financieros",
            "monto": 27943.98,
            "tipo": "gasto",
            "categoria": "Impuestos/Comisiones bancarias"
        },
        {
            "fecha": "2025-10-31",
            "descripcion": "IVA por Servicios",
            "monto": 1516.0,
            "tipo": "gasto",
            "categoria": "Impuestos/Comisiones bancarias"
        }
    ],
    "total_ingresos": 10138325.06,
    "total_gastos": 9331433.68
}