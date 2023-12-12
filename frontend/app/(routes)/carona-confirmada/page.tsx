import styles from "./page.module.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function CaronaConfirmadaPage() {
  return (
    <main className={styles.main}>
      <Image src="/imagens/confirma.png" alt="Sucesso" className={styles.confirmationImage} width={100} height={100} />
      <h3>Carona solicitada com sucesso</h3>
      <Link href="/caronas_reservadas" className={`${styles.btn} ${styles.btnPrimary}`}>Ver minhas caronas agendadas</Link>
    </main>
  );
}
