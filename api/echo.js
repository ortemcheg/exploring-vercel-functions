export default function helloWorld() {
  return new Response().json({
    status: "success",
    message: "Hello world",
  });
}
