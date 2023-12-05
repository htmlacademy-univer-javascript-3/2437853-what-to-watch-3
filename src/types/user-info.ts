export type UserInfo ={
  name: string;
  avatarUrl: string;
  email: string;
};

export type AuthInfo = UserInfo & {
  token: string;
}
