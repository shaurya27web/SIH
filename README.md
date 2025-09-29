# Lok Netra – AI-Powered Sentiment Analysis & Feedback System  
*(Problem Statement ID: 25035 – AlgoRhythm)*  

##  Introduction
**Lok Netra** is an AI-powered system designed to assist the **Ministry of Corporate Affairs (MCA)** in analyzing large volumes of public feedback submitted through the **MCA21 e-Consultation portal**.  
The platform ensures **transparent, inclusive, and efficient participatory governance** by automating sentiment analysis, summarization, clustering, and visualization of citizen feedback.  

---

##  Problem Statement
Manual review of thousands of stakeholder comments creates multiple challenges:
- **Overlooked Issues** – Important feedback gets lost in volume.  
- **Language Barriers** – Inputs often come in Hindi, Hinglish, and regional languages.  
- **Repetition** – Duplicate/similar comments clutter the review process.  
- **Noise** – Abusive, irrelevant, or spam comments reduce efficiency.  

---

##  Proposed Solution
Lok Netra provides a **comprehensive AI-powered feedback ecosystem** with three core components:

1. **Sentiment Analysis**  
   Detects positive, negative, or neutral tone of comments.  

2. **Summarization**  
   Generates short, tiered summaries (one-liner, bullet points, detailed).  

3. **Word Cloud**  
   Visual representation of the most frequent keywords to identify main themes.  

---

##  Key Features

###  Citizen-Centric Features
-  **Multi-Language Support** (English, Hindi, Hinglish, Regional)  
-  **Voting System** for duplicate comment reduction  
-  **AI-Generated Recommendations** for instant FAQs/help  

###  Policymaker-Centric Features
-  **Priority Scoring** of critical comments (NGOs, vulnerable groups)  
-  **Tracking System** for feedback status (Received → Reviewed → Addressed)  
-  **Auto-Translation** of regional comments into English  
-  **Tiered AI Summaries** (One-liner, Bullets, Detailed)  

###  System Efficiency Features
-  **Clustered Comment Grouping (Topic Modeling)**  
-  **Toxic/Spam Filtering**  
-  **Personalized Dashboards** with filters (region, stakeholder type, sentiment)  

---

##  Impact

- **For Citizens**  
  - No language barriers  
  - Transparent tracking of feedback  
  - Ensures voices are heard  

- **For Policymakers**  
  - Saves time with automated summaries & clustering  
  - Removes noise through spam detection  
  - Provides deep insights with dashboards & sentiment trends  

- **For Governance**  
  - Promotes fair and inclusive lawmaking  
  - Aligns with **Digital India’s vision** of participatory governance  

---

##  Future Enhancements
-  **Speech-to-Text Integration** – for illiterate/differently-abled users  
-  **AI-Powered Policy Recommendations** – predictive governance insights  
-  **Blockchain-Based Records** – tamper-proof and auditable citizen feedback  

---

##  Why Lok Netra is Unique?
Unlike basic sentiment analysis tools, Lok Netra:  
✔️ Goes beyond analysis to provide **summarization, translation, tracking & clustering**  
✔️ **Balances citizen empowerment with policymaker efficiency**  
✔️ Establishes a **transparent, full-cycle ecosystem** for participatory governance  

---

##  Tech Stack
- **Backend:** Python (AI/ML Models), Flask/Django  
- **Frontend:** React.js / Angular  
- **NLP & AI:** Transformer-based models for sentiment & summarization  
- **Visualization:** D3.js, Plotly, or Power BI for dashboards  
- **Deployment:** AWS / Azure Cloud  
- **Database:** PostgreSQL / MongoDB  

---

##  Getting Started
# 1. Clone the repository
git clone https://github.com/your-repo/LokNetra.git
cd LokNetra

# 2. Install backend dependencies
pip install -r requirements.txt

# 3. Run the backend
python app.py

# 4. Setup and launch the dashboard
cd dashboard
npm install
npm start
