type User = {
  user_id: number;
  user_name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
};

type Cat = {
  cat_id: number;
  cat_name: string;
  weight: number;
  filename: string;
  owner: User | number;
  birthdate: Date;
  lat: number;
  lng: number;
};

export {Cat};

export {User};
