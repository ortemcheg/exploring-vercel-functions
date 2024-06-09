import { formatRelative, subDays } from "date-fns";
// runtime edge is a must otherwise this thing won't work at all (500)
// if you change it to nodejs, then it will cause an error and the docs do not tell you that
// the error message that you see in your console (or logs) misguides you by saying
// `config.runtime: "nodejs"` semantics will evolve soon. Please remove the `runtime` key to keep the existing behavior
// whereas runtime is mandatory if you want this to work
export const config = {
  runtime: "edge", // this is a pre-requisite
};

export default function GET(request) {
  return new Response(
    JSON.stringify({
      status: "success",
      message: `Three days ago, ${formatRelative(
        subDays(new Date(), 3),
        new Date()
      )} and the secret is ${process.env.SECRET}`,
    }),
    {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }
  );
}
