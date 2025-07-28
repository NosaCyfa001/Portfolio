declare module '@emailjs/browser' {
  export function send(
    serviceID: string,
    templateID: string,
    templateParams: { [key: string]: any },
    publicKey: string
  ): Promise<{ status: number; text: string }>;

  const emailjs: any;
  export default emailjs;
}
