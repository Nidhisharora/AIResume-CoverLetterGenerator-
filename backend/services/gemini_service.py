from config.gemini import model
import time

def generate_content(prompt):
    try:
        start = time.perf_counter()

        response = model.generate_content(prompt)

        end = time.perf_counter()

        print("=" * 50)
        print(f"Gemini took {end-start:.2f} seconds")
        print("=" * 50)

        return response.text

    except Exception as e:
        message = str(e)
    
        if "429" in message or "quota" in message.lower():
            return "⚠️ Gemini API quota exceeded. Please wait for your quota to reset or use another API key."
    
        return f"Error: {message}"


def generate_summary(data):

    prompt = f"""
You are an experienced HR recruiter and resume writing expert.

Create a professional, ATS-friendly resume summary based on the candidate information below.

## Candidate Information

**Name:** {data.name}

**Target Role:** {data.target_role}

**Education:** {data.education}

**Experience:** {data.experience}

**Skills:** {", ".join(data.skills)}

**Projects:** {", ".join(data.projects)}

**Achievements:** {", ".join(data.achievements)}

Instructions:

- Return the response in Markdown.
- Start with the heading:
  # Professional Summary
- Write one concise professional summary (80–120 words).
- Highlight important skills in **bold**.
- Keep the language professional and impactful.
- Do not invent experience, projects, achievements, or technologies.
- Do not use HTML.
"""

    return generate_content(prompt)


def generate_cover_letter(data):

    prompt = f"""
You are an experienced HR recruiter.

Write a professional and personalized cover letter.

## Candidate Information

**Name:** {data.name}

**Target Role:** {data.target_role}

**Education:** {data.education}

**Experience:** {data.experience}

**Skills:** {", ".join(data.skills)}

**Projects:** {", ".join(data.projects)}

**Achievements:** {", ".join(data.achievements)}

Instructions:

- Return the response in Markdown.
- Start with:
  # Cover Letter
- Include:
  - Greeting
  - Introduction
  - Why the candidate is suitable
  - Closing paragraph
  - Professional sign-off
- Highlight important skills using **bold**.
- Keep paragraphs short and readable.
- Do not invent information.
- Do not use HTML.
"""

    return generate_content(prompt)


def improve_project(data):

    prompt = f"""
You are an expert resume writer and software recruiter.

Rewrite the project description below to make it stronger and ATS-friendly.

## Project

{data.project}

## Target Role

{data.target_role}

Instructions:

- Return the response in Markdown.
- Start with:
  ## Improved Project Description
- Keep it between 40 and 80 words.
- Use strong action verbs.
- Emphasize measurable impact whenever possible.
- Highlight technologies using **bold** if they already exist in the description.
- Do not invent new technologies or features.
- Do not use HTML.
"""

    return generate_content(prompt)


def enhance_skills(data):

    prompt = f"""
You are an ATS optimization specialist.

Improve the skills section for a candidate applying for the role below.

## Target Role

{data.target_role}

## Current Skills

{", ".join(data.skills)}

Instructions:

- Return the response in Markdown.
- Start with:
  ## Enhanced Skills
- Create a bulleted list.
- Improve the wording of existing skills.
- Suggest only a few closely related skills if appropriate.
- Do not add unrelated technologies.
- Highlight important skills in **bold**.
- Do not use HTML.
"""

    return generate_content(prompt)