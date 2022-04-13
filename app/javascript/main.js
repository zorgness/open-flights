
export default async function FetchUrl() {
  try {
      let result = await fetch('http://127.0.0.1:3000/api/v1/airlines')
      return result.json()
} catch(err)  {
    console.log(err)
}

}

