import { Sidebar } from "@components/Sidebar";
import { Text } from "@components/Text";
import styles from "./page.module.css";
import Image from "next/image";
import React from "react";

export default function FeedPage() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.barraSuperior} style={{display: "flex"}}>
          <div style={{marginLeft: "20px"}}>
            <Text size="md" asChild><h3>CARONAS DISPONÍVEIS</h3></Text>
          </div>
        </div>
        
        <div className="col-md-6 my-3">
          <div className="input-group">
            <input type="search" className="form-control" placeholder="Pesquisar por local de partida..." aria-label="Pesquisar" aria-describedby="button-addon2" id="searchInput" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar </button>
            </div>
          </div>
        </div>
        <div className={styles.feedItem} data-location="Itapevi">
          <Image className={styles.profileImg} src="/imagens/renato.jpg" alt="Foto de perfil do viajante" width={300} height={300} />
          <div>
            <Text size="md" weight="bold" asChild><h4>Renato Cariani</h4></Text>
            <Text size="sm" weight="light"><strong>Origem:</strong> Itapevi - SP</Text>
            <Text size="sm" weight="light"><strong>Destino:</strong> Fatec Cotia</Text>
            <Text size="sm" weight="light" asChild><h6>Segundas e quartas as 17:00</h6></Text>
            <Text size="sm">
              <a href="loading_carona.html" className={`${styles.btn} ${styles.btnAgendar}`}>
                Agendar Carona
              </a>
            </Text>
          </div>
        </div>
      </div>
    </main>
  );
}
