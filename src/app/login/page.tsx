'use client';

import { useUser } from "@/hooks/UserContext";
import { login } from "@/service/Api";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const { login: addUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (username && password) {
      login(username, password)
        .then(({ user, token }) => {
          addUser(user, token);
          router.push('/');
        })
        .catch(() => setError('La api se rompio sorry :/'));
    } else {
      setError('Completa los campos forrro!!!');
    }
  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </main>
  );
}

export default LoginPage;
