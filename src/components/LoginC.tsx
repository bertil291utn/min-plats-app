import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonInputPasswordToggle,
  useIonRouter,
  IonToast,
} from '@ionic/react';

const LoginC: React.FC = () => {
  const [credentials, setCredentials] = useState({
    userId: '',
    password: ''
  });

  const router = useIonRouter();
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.password === '123456') {
      // Store credentials in localStorage with expiry
      const expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      const storageData = {
        userId: credentials.userId,
        expiry: expiryDate.getTime()
      };
      localStorage.setItem('userAuth', JSON.stringify(storageData));


      router.push('/home', 'forward', 'push');
    } else {
setShowToast(true)
    }
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
        <IonToast
          position="top"
          positionAnchor="header"
          message="Contraseña o cedula incorrecta"
          duration={4000}
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}

        ></IonToast>
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
