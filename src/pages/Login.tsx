import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoginC from '../components/LoginC';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        <LoginC />
      </IonContent>
    </IonPage>
  );
};

export default Login;
