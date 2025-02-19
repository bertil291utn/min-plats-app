import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonInputPasswordToggle,
} from '@ionic/react';

const LoginC: React.FC = () => {
  const [credentials, setCredentials] = useState({
    userId: '',
    password: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt:', credentials.userId);
  };

  const handleChange = (e: any) => {
    const { value } = e.detail as { value: string };
    const { name } = e.target as { name: string };
    
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <IonInput
              labelPlacement='floating'
              fill='outline'
              label='Ingrese numero de cedula'
              type="text"
              name="userId"
              value={credentials.userId}
              onIonChange={handleChange}
              required
            />
            <br />
            <IonInput
              labelPlacement='floating'
              fill='outline'
              label='Ingrese su contraseña'
              type="password"
              name="password"
              value={credentials.password}
              onIonChange={handleChange}
              required
              
            >
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
              </IonInput>

            <div className="ion-padding-top">
              <IonButton expand="block" type="submit">
                Entrar
              </IonButton>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginC;
