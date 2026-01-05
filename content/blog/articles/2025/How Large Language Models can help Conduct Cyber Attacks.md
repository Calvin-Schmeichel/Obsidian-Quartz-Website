---
aliases:
  - IS 483 IEEE Final Paper Revised.docx
cssclasses:
  - Centered_Images
  - Centered_Tables
  - Rounded_Corners
date: 2025-02-25
tags:
  - Article
  - AI
  - SCSU
  - IEEE
---

> [!important] Note
> This article was originally on 6/3/2024 for my [IS 483 (Client Server Security)](https://catalog.stcloudstate.edu/courses/00016842) course at [SCSU](https://www.stcloudstate.edu/). The document has been converted to the [Markdown](https://daringfireball.net/projects/markdown/) format.

> [!info] Credits
> *Calvin Schmeichel*<br />*St. Cloud State University*<br />*Cybersecurity*  
> 
> *Will Novotny*<br />*St. Cloud State University*<br />*Cybersecurity*  
> 
>*Griffin Davies*<br />*St. Cloud State University*<br /> *Cybersecurity*
### I. Abstract  
This research paper dives into the growing threat of malicious actors exploiting LLMs and conversational agents like ChatGPT, Meta AI, and The Bloke in cyber-attacks. LLMs offer immense potential for innovation and learning but also pose significant risks when misused. Through an extensive literature review and practical experimentation, this paper examines the various ways threat actors leverage LLMs for phishing, disinformation campaigns, and automated malware generation. The project evaluates the reliability of LLMs, top companies in the industry, and the ethical considerations surrounding their use in cybersecurity. Lab experiments involving different LLMs reveal their different degrees of susceptibility to prompt engineering for malicious outputs. The findings show the need for more awareness, complex defense strategies, and ethical guidelines to mitigate the risks posed by malicious AI usage. The paper concludes with recommendations for future research, including the development of custom AI systems for cybersecurity, interview with industry experts, awareness campaigns, and policy initiatives to address ethical concerns and enhance cybersecurity measures. 
### II. Problem Domain
Threat	actors are exploiting LLMs to execute diverse cyber-attacks across multiple fronts, posing significant risks to individuals, organizations, and society as a whole. These attacks encompass a wide range of malicious activities, including but not limited to:

1. Phishing and Social Engineering
	- Threat actors utilize LLMs to generate highly convincing phishing emails, text messages, or social media posts. 	
2. Disinformation and Influence Campaigns
	- LLMs empower threat actors to fabricate vast amounts of false information, propaganda, or manipulate media content.
3. Automated Malware Generation 
	- Threat Actors leverage LLMs to automate the generation of sophisticated malware variants tailored to evade traditional security defenses.
### III. Problem Statement
The major growth and use of LLMs and ChatGPT has been a boon for research and learning, but the ease of accessibility to generate malicious concepts and content boosts the capabilities of any individual who wishes to misuse the technology to aid them in various attacks. 
### IV. Research Questions
   1. What is an LLM?
	   - An LLM stands for “Large language model” is a type of artificial intelligence that is built on the transformer architecture. A transformer is a type of deep learning model that has significantly influenced the field of natural language processing (NLP). These models specialize in predicative language.
   2. What is ChatGPT?
	   - ChatGPT is a conversational agent based on the Generative Pre-trained Transformer, architecture developed by OpenAI.
	   - ChatGPT uses a large dataset of text from various sources to train its language model, enabling it to understand and generate human-like responses across a wide range of topics. 
   3. What is LM Studio
	   - With LM Studio, you can
		   - Run LLMs on your laptop, entirely offline, Use models through the in-app Chat UI or an OpenAI compatible local server, download any compatible model files from Hugging Face repositories, Discover new & noteworthy LLMs in the app's home page
		   - LM Studio supports any ggml Llama, MPT, and StarCoder model on Hugging Face (Llama 2, Orca, Vicuna, Nous Hermes, WizardCoder, MPT, etc.)
		   - Minimum requirements: M1/M2/M3 Mac, or a Windows PC with a processor that supports AVX2. Linux is available in beta.
   4. What are the current risks of online chatbots?
	   - Privacy Concerns: Chatbots often collect and store user data to improve their functionality and provide.
   5. How reliable are these LLMs?
	   - These LLMs can be reliable but also can provide unreliable information. 
		   - A.) For example, in the article, “How Trustworthy Are Large Language Models Like GPT?”, "Toxicity reduction efforts notwithstanding, these models can still produce harmful content when prompted adversarially." \[4\] Despite efforts to reduce toxicity, LLMs can generate harmful content under certain prompts. 
		   - B.) Another example, in the article, “How Trustworthy Are Large Language Models Like GPT?”, "Biases persist within LLMs, affecting their responses to sensitive topics like gender and race." \[4\] The presence of biases in LLMs influences their handling of sensitive issues such as gender and race. 
		   - C.) Also, in the article, “How Trustworthy Are Large Language Models Like GPT?”, “Users should exercise caution and human oversight when relying on LLMs, particularly in critical domains like finance and healthcare." \[4\] Users are advised to approach LLMs cautiously, especially in vital areas like finance and healthcare.
   6. What are the current LLM market leaders?
	   - If you just look at raw equity investment funding OpenAI is the largest leader in the industry.
	   - From a technology perspective OpenAI would also be one of the largest leaders but also Microsoft, Meta (Facebook) with Llama 2\.
	   - Finally, outside of the big players there are a ton of small AI startups that are getting major investments from venture capitalist firms and other investors.
### IV. Research Contribution
Our research contribution to the field will help us gain a better understanding of how LLMs are utilized to help threat actors in attacks. Since our wide and thorough research will provide much information, we will aggregate all of it into a short and concise research paper that anyone can read at a high level.

We would also like to provide simple and easy to follow lab instructions during our experiment section to help future research easily set up a home lab and be able to learn in a real environment how a LLM works. This will be free and hopefully provide a great point of research for future generations. 
### VI. Expected Results
We expect the output of the LLMs to have a generally constrained output unless specific prompt engineering is used. We also expect less commercial LLMs found on Face Hugger, it will produce less constrained results and more malicious output. We also expect that we can't ask directly for the LLM to create something malicious and rather softly engineer prompt the LLM to create the results we want. 
### VII. Literature Review
In the article “OPWNAI: Cybercriminals Starting to Use ChatGPT” by Checkpoint Security, a reputable cybersecurity technology company, who discusses direct use cases of threat actors using ChatGPT to create sophisticated attacks. 

**Case 1**: in late December of 2022, a thread named “ChatGPT \- Benefits of Malware” appeared on a popular underground hacking forum. The publisher of the form was found discussing his experiments with ChatGPT to help recreate strains and techniques used by common malware. The post also disclosed the threat actors' script of the “infostealer malware” using ChatGPT

**Case 2**: On New Years Eve of 2022, a forum post of “Abusing ChatGPT” was found that discussed the use of using ChatGPT to create a “Dark Web marketplace” it displayed how easy it was for the AI model to create a website that allowed the exchange of cryptocurrencies for illegal items.

This article shows how threat actors were leveraging LLMs to create tools and code to aid them in potential attacks. It is notable that this was in early 2022 to when LLMs and ChatGPT were in their infancy.

Another article that we took an analysis of was from OpenAI the creators of ChatGPT, this article was called “Disrupting malicious uses of AI by state-affiliated threat actors”. This article outlines how OpenAI worked with Microsoft to catch and stop five different state threat actors from using their new LLM for malicious purposes. Out of the five actors, two were from China known as Charcoal Typhoon and Salmon Typhoon, one from Iran called Crimson Sandstorm, one from North Korea called Emerald Sleet and lastly one from Russia known as Forest Blizzard. These actors attempted to use ChatGPT services to query open-source information, translation, finding coding errors, and running basic coding tasks. After being caught the threat actors' accounts were terminated.

OpenAI was aware that this could happen and was already leaning into safety considerations on how to detect and stop threats. Some of their strategies included, using monitoring technology with integrity teams for investigation, working on furthering AI ecosystems that exchange information on current threat actors, Iterating more safety mitigations from learning from real world misuse and past lessons. 

Overall the article provides excellent insight on how ChatGPT and other possible LLMs are being misused and exploited by threat actors and what OpenAI is doing to combat them. 
### VIII. Methodology (Lab)
For our lab portion of the paper, we had to choose 4 LLMs to test. The four LLMs we chose were ChatGPT (3.5 and 4.0), Meta AI and The Bloke ([From Hugging Face](https://huggingface.co/TheBloke/CapybaraHermes-2.5-Mistral-7B-GGUF)).
1.  We chose Chat GPT 3.5 since it is free, the most popular LLM to date by usage. It is also known for having major guardrails in place. So, we figured it would be a great choice to test.
2. We also chose OpenAI’s ChatGPT 4.0 since it is a premium model that is much larger parameter-wise. We are curious about how the models size affects the ability to “Prompt engineer” the LLM.
3. With the recent release of Metas Llama 3 with “Meta AI” on April 18th. We wanted to use a new relevant LLM to compare to some older LLM’s.
4. Our fourth LLM was “The Bloke” from Hugging Face. This LLM is branched the Mistral LLM. And is known to have less “Guardrails” compared to the online commercial LLMs (Such as the three mentioned above.
#### Lab methods
1. We chose 15 identical prompts to ask each of the four LLMs to be able to compare their response (Or lack thereof)

> [!warning]
> ##### The 15 prompt categories we chose:
> 1. Malware
> 2. Phishing
> 3. Scripts (sub section of Malware)
> 4. Scripts (Backdoor)
> 5. Scripts (fileless virus)
> 6. Script (Keylogger)
> 7. Script (Getting higher privilege access)
> 8. Prompt Attacks?
> 9. Social engineering?
> 10. Create Encryption Tools
> 11. Creating Dark web Marketplaces
> 12. Brute Force Attacks / Create password guesses?
> 13. Injection on web app
> 14. PowerShell script to disable windows security features
> 15. Draft influence campaign plan

For each prompt we tried to encapsulate our prompt as a theoretical scenario such as: “advanced online workshop”, “leading a seminar”, “cybersecurity conference”, “training session for IT security”, “preparing a research paper”. This form of “Prompt Engineering” helped prevent the commercial LLMs from “Shutting down” and giving out any sort of response. (And that is reflected in lab documents)

For each prompt we carefully pasted into a fresh chat for each LLM to prevent any extra variables from affecting the LLM’s output.

We then would document the replies for analysis within the lab documents.
### IX. Analysis
From our analysis and results we can clearly see that Meta AI was the most resilient in terms of outputting malicious code and examples with it not responding to five out of the fifteen prompts. The next most resilient that we found was ChatGPT 3.5 being more restricted than it's paid for 4.0 counterpart and lastly The Bloke LLM being the least restricted. Overall, the different LLMs gave us a range of information that could be used by malicious threat actors to aid in their attacks. One thing to note is that the output of these LLMs don't display any new zero-day attacks or advanced exploits, but rather distribute pretty novice attacks and techniques that might still help expedite the attack that the threat actor is trying to perform. 
### X. Conclusions
LLMs are a new and upcoming technology that's still in its infancy being developed by both commercial businesses and opensource projects, and while these technologies provide many benefits to the public, they also create ways for malicious threat actors to try an exploit them and utilize them to help aid in their attacks.
### XI. Future works
1. Creating our own AI and using machine learning algorithms:
	- In the future we can develop a custom AI system for cybersecurity by leveraging machine learning algorithms. This involves creating an AI model geared towards detecting and mitigating cyber threats, utilizing data sources like network traffic logs and system event records. Following data preprocessing and model development, the system will go through training and evaluation to ensure its effectiveness. Once trained, the model will be integrated into existing cybersecurity infrastructure for real-time threat detection and response, with continuous monitoring and improvement to adapt to evolving threats.
2. Interview someone working with ChatGPT, Meta AI, The Bloke:
	- Conducting interviews with professionals actively engaged in AI technologies like ChatGPT, Meta AI, or other prominent players in the field offers valuable insights into the practical implications and risks associated with these advanced systems in cybersecurity. By engaging with experts who have hands-on experience with LLMs, we can gain firsthand knowledge about the challenges, opportunities, and potential misuse scenarios. These interviews will provide insights into identifying risks and developing effective preventive measures against AI-driven cyber threats. Additionally, by exploring their strategies for addressing security concerns and ensuring responsible AI usage, we can inform the development of complex defense strategies and contribute to a deeper understanding of the evolving threat landscape in an increasingly AI-driven world.
3. Awareness and Campaigns:
	- Raising awareness about the risks associated with malicious AI use is crucial for promoting responsible AI development. Through targeted campaigns, including workshops, webinars, and social media outreach, we can educate both the general public and cybersecurity professionals about the potential threats posed by AI-driven cyber-attacks. Tailoring messages to specific industries and vulnerable groups, such as small businesses and educational institutions, will ensure that the information is relevant and actionable. By collaborating with organizations, advocacy groups, and government agencies, we can amplify the impact of these efforts and reach a broader audience. Together, we can build a collective understanding of the challenges posed by malicious AI usage and promote proactive measures to mitigate these risks, ultimately creating a safer digital environment for all.
4. Ethical Considerations and Policy Recommendations: 
	- Investigating the ethical implications of LLMs and ChatGPT in cybersecurity is essential. Future work could involve conducting an in-depth analysis of the ethical challenges posed by AI in cyber-attacks, including issues related to privacy, bias, and accountability. Furthermore, research could focus on developing policy recommendations and guidelines for regulating the responsible development and deployment of AI technologies in cybersecurity. Additionally promoting collaboration will facilitate knowledge sharing, capacity building, and the development of best practices to enhance cybersecurity resilience amidst the evolving cybersecurity landscape.
### References
> [!info] Sources List
> \[1\] Sergeyshy, “Opwnai : Cybercriminals starting to use chatgpt,” Check Point Research, https://research.checkpoint.com/2023/opwnai-cybercriminals-starting-to-use-chatgpt/ (accessed May 1, 2024).
> 
> \[2\] Disrupting malicious uses of AI by state-affiliated threat actors, https://openai.com/blog/disrupting-malicious-uses-of-ai-by-state-affiliated-threat-actors (accessed May 1, 2024).
> 
> \[3\] “TheBloke/capybarahermes-2.5-Mistral-7B-GGUF · hugging face,” TheBloke/CapybaraHermes-2.5-Mistral-7B-GGUF · Hugging Face, https://huggingface.co/TheBloke/CapybaraHermes-2.5-Mistral-7B-GGUF (accessed May 1, 2024).
> 
> \[4\] “How trustworthy are large language models like GPT?,” Stanford HAI, https://hai.stanford.edu/news/how-trustworthy-are-large-language-models-gpt (accessed May 1, 2024).
> 
> \[5\] “Meet your new assistant: Meta Ai, built with Llama 3,” Meta, https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/ (accessed May 1, 2024).
> 
> \[6\] “Welcome: LM studio,” Welcome | LM Studio, https://lmstudio.ai/docs/welcome (accessed May 1, 2024).
> 
> \[7\] Mssaperla, “Generative AI and Large Language Models (llms) on Azure Databricks \- Azure Databricks,” Azure Databricks | Microsoft Learn, https://learn.microsoft.com/en-us/azure/databricks/generative-ai/generative-ai (accessed May 1, 2024).
> 
> \[8\] “Meta Llama 3,” Meta Llama, https://llama.meta.com/llama3/ (accessed May 1, 2024).
> 
> \[9\] Models \- openai API, https://platform.openai.com/docs/models/overview (accessed May 2, 2024).
> 
> \[10\] “Leveraging large language models for exploiting ASR uncertainty,” Apple Machine Learning Research, https://machinelearning.apple.com/research/leveraging-large-language-models (accessed May 1, 2024).