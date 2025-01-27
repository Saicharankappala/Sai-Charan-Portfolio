app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
    console.error("Invalid prompt received:", prompt);
    return res.status(400).json({ error: "Invalid prompt provided." });
  }

  try {
    console.log("Sending prompt to OpenAI:", prompt);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
      temperature: 0.7,
    });

    console.log("OpenAI response:", completion);

    res.status(200).json({
      response: completion.choices[0]?.message?.content || "No response received.",
    });
  } catch (error) {
    console.error("Error while communicating with OpenAI API:", error);

    if (error.response) {
      res.status(error.response.status).json({
        error: error.response.data.error.message || "An error occurred with OpenAI API.",
      });
    } else {
      res.status(500).json({ error: "Internal server error. Please try again later." });
    }
  }
});
