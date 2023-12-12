import { Input } from "@components/Input";
import { Text } from "@components/Text";
import styles from "./page.module.css";
import Image from "next/image";
import React from "react";

export default function RegisterPage() {
  return (
    <main className={styles.main}>
      <div className={styles.illustration} />
      <form className={styles.register_area}>
        <Image src="/imagens/logo-no-bg.png" alt="logo" width={250} height={146} />
        <Text asChild><h2 className={styles.register_title}>Registro</h2></Text>
        <div className={styles.register_fields}>
          <Input type="text" name="username" placeholder="Digite seu nome de usuário" />
          <Input type="text" name="username" placeholder="Digite seu RA" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
        </div>
        <div className={styles.options}>
          <div className="remember_area">
            <Input type="checkbox" id="rememberCheckbox" name="remember" />
            <Text size="xs" asChild>
              <label htmlFor="rememberCheckbox">Lembrar de mim</label>
            </Text>
          </div>
          <Text size="xs" asChild><a className="forgot_password" href="">Esqueci minha senha</a></Text>
        </div>
        <button type="submit" className="register_button">Registrar-se</button>
      </form>
    </main>
  );
}
