import { useState } from "react";
import { Calendar, Clock, MapPin, Youtube, ExternalLink, Users, ChevronDown } from "lucide-react";
import { Image } from "./Image";

interface GtecHackathonProps {
  onNavigate: (page: string) => void;
}

interface ScheduleEvent {
  time: string;
  name: string;
  note: string;
}

interface ScheduleDay {
  label: string;
  date: string; // YYYY-MM-DD for comparison
  events: ScheduleEvent[];
}

function ScheduleAccordion({
  days,
  defaultOpenIndex,
  dotColor,
}: {
  days: ScheduleDay[];
  defaultOpenIndex: number;
  dotColor: string;
}) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);

  return (
    <div className="divide-y">
      {days.map((day, i) => {
        const isOpen = openIndex === i;
        const isToday = day.date === "2026-04-22";
        return (
          <div key={day.label}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between px-5 py-3 text-left transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{day.label}</span>
                {isToday && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    Today
                  </span>
                )}
              </div>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="border-t bg-muted/20">
                {day.events.map((ev) => (
                  <div key={ev.name} className="flex gap-3 border-b px-5 py-3 last:border-b-0">
                    <span className="w-28 shrink-0 pt-0.5 text-xs text-muted-foreground">
                      {ev.time}
                    </span>
                    <div className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} />
                    <div>
                      <p className="text-sm font-medium">{ev.name}</p>
                      <p className="text-xs text-muted-foreground">{ev.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function GtecHackathon({ onNavigate }: GtecHackathonProps) {
  const details = [
    {
      icon: Calendar,
      label: "Date",
      value: "April 25 - April 26",
    },
    {
      icon: Clock,
      label: "Time",
      value: "9:00 AM - 10:00 PM April 25, 10:00 AM - 3:00PM April 26",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Entrepreneurship Garage, NC State University, Raleigh, NC",
    },
    {
      icon: Users,
      label: "Hosted by",
      value: "BR41N.IO & g.tec medical engineering",
    },
  ];

  const sponsors = [
    {
      name: "g.tec medical engineering",
      logo: "/images/collaborations/g-tec-logo.svg",
      url: "https://www.gtec.at",
      description: "Pioneer in brain-computer interface technology and neurotechnology research.",
    },
    {
      name: "Neuropawn",
      logo: "/images/collaborations/neuropawn-logo.png",
      url: "https://www.neuropawn.tech",
      description: "Advancing accessible neurotechnology solutions for researchers and developers.",
    },
    {
      name: "Hilltop Home",
      logo: "/images/collaborations/hilltop-logo.svg",
      url: "https://hilltophom.org",
      description: "Intermediate care facility",
    },
  ];

  // International schedule — April 19–29 (10 days)
  const internationalDays: ScheduleDay[] = [
    {
      label: "Day 1 — Monday, April 20",
      date: "2026-04-20",
      events: [
        { time: "3:00 AM", name: "Brain–Computer Interfaces: From First Experiments to Clinical Reality", note: "Christoph Guger, g.tec medical engineering GmbH (AT)" },
        { time: "5:00 AM", name: "High-Fidelity EEG: Recording the Brain Properly Wirelessly", note: "Bernard Wong, g.tec medical engineering GmbH (AT)" },
        { time: "6:00 AM", name: "Translating Neurotechnology into Real-World Applications", note: "Brendan Allison, UC San Diego (USA)" },
        { time: "7:00 AM", name: "ECoG and Stereo-EEG: Building High-Performance Invasive BCIs", note: "Christoph Kapeller, g.tec medical engineering GmbH (AT)" },
        { time: "8:00 AM", name: "ECoG in Functional Neurosurgery: Clinical Lessons from the Operating Room", note: "Kyousuke Kamada, Chitose City Hospital (JP)" },
        { time: "9:00 AM", name: "Live Demonstration: High-Fidelity EEG Acquisition Under Real Experimental Conditions", note: "Christoph Guger, Slobodan Tanackovic, g.tec medical engineering GmbH (AT)" },
        { time: "10:00 AM", name: "Multimodal Brain Recording: Integrating EEG and fNIRS", note: "Danut Irimia, g.tec medical engineering GmbH (RO)" },
        { time: "11:00 AM", name: "Reproducibility in BCI: From Signal Quality to Scientific Standards", note: "Leonhard Schreiner, Stanford University (USA)" },
        { time: "12:00 PM", name: "Founders’ Lecture: The Evolution and Future of Brain–Computer Interfaces", note: "Jon Wolpaw, National Center for Adaptive Neurotechnologies (USA)" },
        { time: "1:00 PM", name: "Panel Discussion: The Future of Recording in BCI – Standards, Reproducibility and Clinical Translation", note: "Leonhard Schreiner, Stanford University (USA), Jon Wolpaw, National Center for Adaptive Neurotechnologies (USA), Brendan Allison, UC San Diego (USA)" },
      ],
    },
    {
      label: "Day 2 — Tuesday, April 21",
      date: "2026-04-21",
      events: [
        { time: "3:00 AM", name: "High-Gamma Activity and Cortico-Cortical Evoked Potentials in Network-Level Brain Mapping", note: "Christoph Kapeller, g.tec medical engineering GmbH (AT)" },
        { time: "4:00 AM", name: "From Patient-Specific Simulations to Probabilistic Mapping for Group-Level Analysis in Deep Brain Stimulation", note: "Simone Hemm, FHNW – University of Applied Sciences Northwestern Switzerland (CH)" },
        { time: "5:00 AM", name: "Direct Electrical Stimulation: Methods, Limits and Intraoperative Applications", note: "Francois Bonnetblanc, CAMIN, Inria, University of Montpellier (FR)" },
        { time: "6:00 AM", name: "Real-Time Closed-Loop Neuromodulation Experiments: System Implementation", note: "Patrick Reitner, g.tec medical engineering GmbH (AT)" },
        { time: "7:00 AM", name: "Pioneers’ Lecture: Cortico-Cortical Evoked Potentials — From Discovery to Network Neurosurgery", note: "Riki Matsumoto, Kyoto University (JP)" },
        { time: "8:00 AM", name: "Oscillatory Neural Dynamics in Acute and Chronic Neuromodulation", note: "Nuri Firat Ince, Mayo Clinic (USA)" },
        { time: "9:00 AM", name: "From Neural Circuits to Surgical Reality: Deep Brain Stimulation and ECoG in Clinical Practice", note: "Aysegul Gunduz, University of Florida (USA)" },
        { time: "10:00 AM", name: "State-of-the-Art Intraoperative Neuromonitoring", note: "Andrea Szelenyi, LMU Munich (DE)" },
        { time: "11:00 AM", name: "An Implantable Brain–Spine Interface Restoring Lower Limb Movement After Complete Spinal Cord Injury", note: "Valeria Spagnolo, EPFL (CH), 3rd Place Winner BCI Award 2025" },
        { time: "12:00 PM", name: "Cortical Remodeling Around Gliomas: How the Brain Reacts to and Fuels Tumor Growth", note: "Gilles Huberfeld, Rothschild Foundation Hospital (FR)" },
        { time: "1:00 PM", name: " Panel Discussion: The Limits and Future of Invasive BCI and Neuromodulation", note: "Nuri Firat Ince, Mayo Clinic (USA), Christoph Kapeller, g.tec medical engineering GmbH (AT), Aysegul Gunduz, University of Florida (USA), Andrea Szelenyi, LMU Munich (DE)" },
        { time: "2:00 PM", name: "Closing Lecture: Brain Stimulation – Clinical Practice and Network Perspectives", note: "Wolf-Julian Neumann, Wyss Center for Bio- and Neuroengineering (CH)" },
      ],
    },
    {
      label: "Day 3 — Wednesday, April 22",
      date: "2026-04-22",
      events: [
        { time: "3:00 AM", name: "Signal Processing for High-Quality EEG", note: "Johannes Grünwald, g.tec medical engineering GmbH (AT)" },
        { time: "4:00 AM", name: "Feature Extraction and Classification in Brain–Computer Interfaces", note: "Reinhold Scherer, University of Essex (UK)" },
        { time: "5:00 AM", name: "Advanced Biosignal Processing for Auditory Neurotechnology", note: "Adrian Mai, Saarland University & HTW Saar (DE)" },
        { time: "6:00 AM", name: "Engineering High-Performance BCIs for Neurorehabilitation", note: "Jing Jin, East China University of Science and Technology (CN)" },
        { time: "7:00 AM", name: "Interpretable Machine Learning Solutions for EEG, MEG and ECoG Data Analysis", note: "Alex Ossadtchi, Higher School of Economics (RU)" },
        { time: "8:00 AM", name: "AI for BCI Data: Deep Learning and Generalization", note: "Nadia Mammone, University Mediterranea of Reggio Calabria (IT)" },
        { time: "9:00 AM", name: "Neural Speech Decoding from Intracranial Recordings", note: "Nima Mesgarani, Columbia University (USA)" },
        { time: "10:00 AM", name: "An Inner Speech Neuroprosthesis", note: "Erin M. Kunz, Stanford University (USA), 1st Place Winner BCI Award 2025" },
        { time: "11:00 AM", name: "Neuroethical Considerations and Industry–Academic Partnerships", note: "Tristan McIntosh, Washington University School of Medicine (USA)" },
        { time: "12:00 PM", name: "Neuromodulation in Clinical Settings", note: "Jonathon Parker, Mayo Clinic (USA)" },
        { time: "1:00 PM", name: "Panel Discussion: AI in BCI – Generalization, Ethics and the Limits of Decoding", note: "Jonathon Parker, Mayo Clinic (USA), Reinhold Scherer, University of Essex (UK) and Sebastian Sieghartsleitner, g.tec medical engineering GmbH (AT), Alex Ossadtchi, Higher School of Economics (RU)" },
        { time: "2:00 PM", name: "Future Opportunities: Scaling Brain Recording – 1024-Channel EEG and High-Density Systems", note: "Sebastian Sieghartsleitner and Pauline Schomaker, g.tec medical engineering GmbH (AT)" },
      ],
    },
    {
      label: "Day 4 — Thursday, April 23",
      date: "2026-04-23",
      events: [
        { time: "3:00 AM", name: "TMS–EEG with Active and Passive Electrodes: Practical Implementation and Demonstration", note: "Slobodan Tanackovic, g.tec medical engineering GmbH (AT)" },
        { time: "4:00 AM", name: "State-of-the-Art Navigated TMS Technology", note: "Henri Hannula, Nexstim (FI)" },
        { time: "5:00 AM", name: "Studying Local Excitability and Effective Connectivity with TMS–EEG Coregistration", note: "Marta Bortoletto, IMT Lucca (IT)" },
        { time: "6:00 AM", name: "BCIs, Disorders of Consciousness, and Network Integrity", note: "Steven Laureys, CERVO Brain Research Centre (CA)" },
        { time: "7:00 AM", name: "Brain Rhythms Underpinning the Level of Consciousness in Humans", note: "Claudio Babiloni, Sapienza University of Rome (IT)" },
        { time: "8:00 AM", name: "TMS in Alzheimer’s Disease: Mechanisms and Therapeutic Potential", note: "Giacomo Koch, Fondazione Santa Lucia (IT)" },
        { time: "9:00 AM", name: "Tele-TMS: Advancing Automated Neuromodulation through EEG-Informed Robotics", note: "Mitsuaki Takemi, Hiroshima University (JP)" },
        { time: "10:00 AM", name: "Signal Processing for TMS–EEG: Artifact Suppression and Recovery", note: "Johannes Grünwald, g.tec medical engineering GmbH (AT)" },
        { time: "11:00 AM", name: "New Insights on Oscillators and Their Applications to Engineering and Science", note: "Aleksandr S. Khachunts, L. A. Orbeli Institute of Physiology of National Academy of Sciences (AM)" },
        { time: "12:00 PM", name: "High-Precision TMS–EEG in Network Neuroscience", note: "Corey Keller, Stanford University (USA)" },
        { time: "1:00 PM", name: "Panel Discussion: From Biomarkers to Intervention – Ethical and Clinical Boundaries in Neurotechnology", note: "Claudio Babiloni, Sapienza University of Rome (IT) and Steven Laureys, CERVO Brain Research Centre (CA), Corey Keller, Stanford University (USA)" },
        { time: "2:00 PM", name: "Closing Lecture: EEG and fNIRS Recordings for BCI Experiments", note: "Maria Antonia Piedrahita López, University of Miami (USA)" },
      ],
    },
    {
      label: "Day 5 — Friday, April 24",
      date: "2026-04-24",
      events: [
        { time: "3:00 AM", name: "Wearable Neurotechnology: Fashion, Interaction and Brain–Computer Interfaces", note: "Anouk Wipprecht, Pioneer of fashion-tech interfaces integrating neurotechnology with interactive design (NL)" },
        { time: "4:00 AM", name: "BCI Training in Virtual Reality: Bridging the Gap to the Real World", note: "Tom Carlson, University College of London (UK)" },
        { time: "5:00 AM", name: "Developing and Deploying Neurotechnology Applications in Practice", note: "David B. Grayden, University of Melbourne (AU)" },
        { time: "6:00 AM", name: "Integrating Neurotechnology into Aeromedical Training Systems: EEG, fNIRS and Eye Tracking", note: "Thomas David, AMST Systemtechnik – Aerospace Medicine and Simulation (AT)" },
        { time: "7:00 AM", name: "Python for Real-Time Neuroscience", note: "Johannes Grünwald, g.tec medical engineering GmbH (AT)" },
        { time: "8:00 AM", name: "Exploring Brain Network Connectivity: A Python-Based EEG Pipeline", note: "Reza Abiri, Anna Cetera, University of Rhode Island (USA)" },
        { time: "9:00 AM", name: "From Code to Control: Implementing Practical BCIs", note: "Patrick Reitner, g.tec medical engineering GmbH (AT)" },
        { time: "10:00 AM", name: "Immersive Neurotechnology: BCI Integration in Virtual Environments", note: "Tiago Falk, INRS – Institut national de la recherche scientifique (CA)" },
        { time: "11:00 AM", name: "VR, XR and Unity for Building Interactive Neurotechnologies", note: "Javi Rodriguez and Daniel Romero, g.tec medical engineering GmbH (AT)" },
        { time: "12:00 PM", name: "Real-World Deployment of Brain–Computer Interfaces", note: "Theresa Vaughan, National Center for Adaptive Neurotechnologies (USA)" },
        { time: "1:00 PM", name: "Rapid Demo: Four Real-World BCIs in 20 Minutes", note: "Christoph Guger, g.tec medical engineering GmbH (AT)" },
        { time: "1:20 PM", name: "Panel on Preparation for the Hackathon: Building the Next Generation of BCIs – Tools, Platforms and Creative Applications", note: "Tom Carlson, University College of London (UK) and Johannes Grünwald, g.tec medical engineering GmbH (AT)" },
        { time: "2:00 PM", name: "Closing Lecture: Unity and BCI: Real-Time Brain-Computer Interfaces", note: "Bernard Wong, g.tec medical engineering GmbH (AT)" },,
      ],
    },
    {
      label: "Day 6 — Saturday, April 25",
      date: "2026-04-25",
      events: [
        { time: "3:00 AM", name: "Launching BR41N.IO 2026: Global Hackathon Architecture and Hosting Network", note: "Christoph Guger, g.tec medical engineering GmbH (AT) and Hackathon Hosts" },
        { time: "4:00 AM", name: "Real-Time BCI Development: Hardware, APIs and Deployment", note: "Bernard Wong and Pauline Schomaker, g.tec medical engineering GmbH (AT)" },
        { time: "5:00 AM", name: "Available BCI Paradigms and Open Datasets: MI, P300, SSVEP and ECoG", note: "Sebastian Sieghartsleitner, Rupert Ortner and Johannes Grünwald, g.tec medical engineering GmbH (AT)" },
        { time: "6:00 AM", name: "Hackathon Tracks, Evaluation Criteria and Awards", note: "Christoph Guger, g.tec medical engineering GmbH (AT)" },
        { time: "6:00 AM", name: "Start of BR41N.IO all Day & Night Hacking", note: "" },
      ],
    },
    {
      label: "Day 7 — Sunday, April 26",
      date: "2026-04-26",
      events: [
        { time: "12:00 AM", name: "Final Hacking Phase and Project Completion", note: "" },
        { time: "8:00 AM", name: "BR41N.IO Project Presentations and Live Demonstrations", note: "" },
        { time: "12:00 PM", name: "BR41N.IO Awards Ceremony", note: "" },
        { time: "12:30 PM", name: "Certificate Ceremony and Closing Remarks", note: "" },
      ],
    },
    {
      label: "Day 8 — Monday, April 27",
      date: "2026-04-27",
      events: [
        { time: "3:00 AM", name: "Closed-Loop BCI Neurorehabilitation for Stroke, Multiple Sclerosis and Parkinson’s Disease", note: "Christoph Guger, g.tec medical engineering GmbH (AT)" },
        { time: "4:00 AM", name: "Neurorehabilitation with BCI, FES and VR", note: "Pablo Cruz Gonzalez, The Hong Kong Polytechnic University (HK)" },
        { time: "5:00 AM", name: "Non-Invasive BCI for Stroke Rehabilitation: Current Evidence and Clinical Challenges", note: "Subasree Ramakrishnan, National Institute of Mental Health and Neurosciences (IN)" },
        { time: "6:00 AM", name: "Brain–Computer Interfaces for Rehabilitation Robotics", note: "Jose Maria Azorín, Universidad Miguel Hernandez (ES)" },
        { time: "7:00 AM", name: "Restoring Rapid Natural Bimanual Typing with a Neuroprosthesis after Paralysis", note: "Justin Jude, Massachusetts General Hospital (USA)" },
        { time: "8:00 AM", name: "Clinical Neurorehabilitation for Individuals with Stroke Using Advanced Technologies", note: "Joon-Ho Shin, National Rehabilitation Center in Korea (KR)" },
        { time: "9:00 AM", name: "Robotic Neurorehabilitation and Brain–Machine Interfaces", note: "Jose Pons, Shirley Ryan Ability Lab (USA)" },
        { time: "10:00 AM", name: "BCI-Based Rehabilitation for Upper Extremity Stroke", note: "Vivek Prabhakaran, University of Wisconsin (USA)" },
        { time: "11:00 AM", name: "Practical Implementation of BCI-Based Stroke Therapy (Live Session)", note: "Sebastian Sieghartsleitner, g.tec medical engineering GmbH (AT)" },
        { time: "12:00 PM", name: "Neurorehabilitation and Outcome Assessment: Measuring Recovery", note: "David Lin, Harvard University (USA)" },
        { time: "1:00 PM", name: "Panel Discussion: Evidence, Scalability and the Future of BCI-Based Neurorehabilitation", note: "David Lin, Harvard University (USA), Woosang Cho, g.tec medical engineering GmbH (AT) and Jose Pons, Shirley Ryan Ability Lab (USA)" },
        { time: "2:00 PM", name: "Closing Lecture: Emerging Indications for BCI Neurorehabilitation – Long COVID and Rare Neurological Disorders", note: "Woosang Cho, g.tec medical engineering GmbH (AT)" },
      ],
    },
    {
      label: "Day 9 — Tuesday, April 28",
      date: "2026-04-28",
      events: [
        { time: "3:00 AM", name: "BCI-Based Assessment and Prediction in Disorders of Consciousness", note: "Christoph Guger, g.tec medical engineering GmbH (AT)" },
        { time: "4:00 AM", name: "mindBEAGLE: Assessment, Communication and Prognosis in Disorders of Consciousness", note: "Sebastian Sieghartsleitner, g.tec medical engineering GmbH (AT)" },
        { time: "5:00 AM", name: "Neurophysiological Biomarkers in Dementia Research", note: "Tomasz M. Rutkowski, The University of Tokyo (JP)" },
        { time: "6:00 AM", name: "Electrophysiological Biomarkers in Disorders of Consciousness", note: "Rossella Spataro, Neurorehabilitation Unit, Villa delle Ginestre Hospital, ASP Palermo (IT)" },
        { time: "7:00 AM", name: "High-Resolution ECG Biomarkers for Neurocardiology Applications and Electrostructural Cardiac Phenotyping", note: "Gabriella Captur, University College of London (UK)" },
        { time: "8:00 AM", name: "Amygdala-Based Biomarkers for Emotional and Cognitive Processing", note: "Oded Kraft, Graymatters (IL)" },
        { time: "9:00 AM", name: "Neurophysiological Biomarkers in Patients with Disorders of Consciousness", note: "Marzia de Lucia, CHUV (CH)" },
        { time: "10:00 AM", name: "DBS biomarkers for Parkinsons and longitudinal biomarkers for chronic ECoG in ALS", note: "Dean Krusienski, Virginia Commonwealth University (USA)" },
        { time: "11:00 AM", name: "Pioneer Lecture: Neural Biomarkers for Movement Reconstruction", note: "Lee Miller, Northwestern University (USA)" },
        { time: "12:00 PM", name: "Biomarkers for Concussion and Mild Traumatic Brain Injury", note: "Kimberly Connolly, VoxNeuro (CA)" },
        { time: "1:00 PM", name: "Panel Discussion: The Future of Neurophysiological Biomarkers – Validity, Ethics and Clinical Translation", note: "Dean Krusienski, Virginia Commonwealth University (USA), Oded Kraft, Graymatters (IL) and Lee Miller, Northwestern University (USA)" },
        { time: "2:00 PM", name: "Future Opportunities: Electric Fields across Scales – From Macro to Nano Approaches for Cortical Circuit Modulation", note: "Mavi Sánchez-Vives, IDIBAPS (ES)" },
      ],
    },
    {
      label: "Day 10 — Wednesday, April 29",
      date: "2026-04-29",
      events: [
        { time: "3:00 AM", name: "Functional Mapping with Electrocorticography (ECoG)", note: "Christoph Guger, g.tec medical engineering GmbH (AT)" },
        { time: "4:00 AM", name: "Clinical Applications of High-Gamma Activity Mapping in Neurosurgery", note: "Takahiro Sanada, Northwell (USA)" },
        { time: "5:00 AM", name: "Passive Brain Mapping and Time–Frequency Analysis in Neurosurgical Practice", note: "Kyousuke Kamada, Chitose City Hospital (JP)" },
        { time: "6:00 AM", name: "Real-Time Functional Mapping Using High-Gamma and Ultra-High-Gamma Activity", note: "Christoph Kapeller, g.tec medical engineering GmbH (AT)" },
        { time: "7:00 AM", name: "Development of Flexible Electrode Technologies for Functional Mapping", note: "Jordi Ferre, Aitex (ES)" },
        { time: "8:00 AM", name: "Micro- and Macro-Electrode Design for Invasive Neurophysiology", note: "Emma Acerbo, DIXI Medical (FR)" },
        { time: "9:00 AM", name: "Pioneer Lecture: High-Gamma Mapping in Brain–Computer Interfaces", note: "Peter Brunner, Washington University St. Louis (USA)" },
        { time: "10:00 AM", name: "High-Gamma Mapping with Stereo-EEG in Pediatric Epilepsy Surgery", note: "Masanori Takeoka, Harvard University (USA)" },
        { time: "11:00 AM", name: "Broadband (High-Gamma) Mapping, Power-Laws, and Exploration of Somatotopy in Brain Circuitry", note: "Kai Miller, Mayo Clinic (USA)" },
        { time: "12:00 PM", name: "Panel Discussion: Advances, Limitations and Ethical Boundaries of High-Gamma Mapping", note: "Kai Miller, Mayo Clinic (USA), Christoph Kapeller, g.tec medical engineering GmbH (AT), Takahiro Sanada, Northwell (USA) and Emma Acerbo, DIXI Medical (FR)" },
        { time: "1:00 PM", name: "CLOSING LECTURE: Whole-Brain Dynamic Causal Tractography: Mapping Human Brain Networks at Millisecond Resolution", note: "Eishi Asano, Wayne State University, Children’s Hospital of Michigan, International Federation of Clinical Neurophysiology (USA)" },
        { time: "2:00 PM", name: "Comprehensive Examination, Social Media Challenge and Closing Ceremony", note: "Christoph Guger, g.tec medical engineering GmbH (AT)" },
      ],
    },
  ];

  // Local schedule — April 25–26 (2 days)
  const localDays: ScheduleDay[] = [
    {
      label: "Day 1 — Saturday, April 25",
      date: "2026-04-25",
      events: [
        { time: "9:00 AM", name: "Doors open and check-in. Participants arrive, and hardware stations are accessible.", note: "" },
        { time: "9:15 AM", name: "Welcome and NeuroTech at NC State introduction. Sponsors and guest presentations; open slot for demos, inspiration, and early ideation kickoff (flexible up to 11:30 AM if needed).", note: "" },
        { time: "10:00 AM – 11:00 AM", name: "Goals, judging criteria (technical rigor, creativity, translational potential), available hardware, and software resources overview.", note: "" },
        { time: "10:00 AM – 12:00 PM", name: "Concurrent g.tec resource sessions on demand. Includes real-time BCI hardware/APIs, open datasets (MI, P300, SSVEP, ECoG), and paradigm walkthroughs. Vienna Day 6 content available via stream/replay (16:00–18:00 CEST).", note: "" },
        { time: "11:00 AM – 1:00 PM", name: "Team formation and idea initialization. Pitches, team assembly, scope definition, and mentor support. Track registration due by 1:00 PM.", note: "" },
        { time: "1:00 PM", name: "Lunch served.", note: "" },
        { time: "1:30 PM – 10:00 PM", name: "Open hacking block. Full build time with mentors available, hardware checkouts open, and evening snacks provided. Teams log progress updates.", note: "" },
        { time: "10:00 PM", name: "Day 1 close. Venue wraps; optional overnight remote continuation.", note: "" },
      ],
    },
    {
      label: "Day 2 — Sunday, April 26",
      date: "2026-04-26",
      events: [
        { time: "10:00 AM", name: "Doors open, final hacking resumes. Last window for mentor check-ins and hardware adjustments.", note: "" },
        { time: "10:00 AM – 11:30 AM", name: "Pitch prep and demo finalization. Teams wrap builds, assemble slides or live demos, and rehearse 3–5 minute presentations. Organizers collect project summaries.", note: "" },
        { time: "11:30 AM – 12:00 PM", name: "Team presentations to local judges.", note: "" },
        { time: "12:00 PM", name: "Lunch served while judges deliberate.", note: "" },
        { time: "12:00 PM – 12:30 PM", name: "International BR41N.IO Awards Ceremony (live stream from Vienna). Global winners announced. (Vienna 18:00 CEST)", note: "" },
        { time: "12:30 PM", name: "International Certificate Ceremony and closing remarks (live stream from Vienna). (Vienna 18:30 CEST)", note: "" },
        { time: "12:30 PM – 1:00 PM", name: "NC State local prize ceremony. Results announced, prizes awarded, and closing remarks from NeuroTech leadership.", note: "" },
        { time: "1:00 PM – 1:30 PM", name: "Informal close, team photos, and networking.", note: "" },
        { time: "1:30 PM – 2:00 PM", name: "Cleanup and venue clear.", note: "" },
      ],
    },
  ];

  // Auto-open today's day for international
 // Auto-open today's day for international and local schedules
const getLocalDateString = (date = new Date()) => {
  // Extract local year, month, and day to avoid UTC rollover issues
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const today = getLocalDateString();

const intlDefaultIndex = (() => {
  const idx = internationalDays.findIndex((d) => d.date === today);
  return idx !== -1 ? idx : 0;
})();

const localDefaultIndex = (() => {
  const idx = localDays.findIndex((d) => d.date === today);
  return idx !== -1 ? idx : 0;
})();

return (
  <section className="py-20">
    <div className="container mx-auto px-4">

      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Spring School 2026
        </div>
        <h1 className="mb-4 text-4xl md:text-5xl">BR41N.IO Hackathon</h1>
        <div className="mx-auto mb-6 h-1 w-24 bg-primary" />
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Join us for the Spring School 2026 hackathon, hosted in partnership with BR41N.IO
          and g.tec medical engineering — a weekend of building, learning, and innovation
          at the intersection of neurotechnology and engineering.
        </p>
      </div>

      {/* Poster + Event Details side by side */}
      <div className="mx-auto mb-16 max-w-5xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

          {/* Flyer */}
          <div className="w-full overflow-hidden rounded-xl border shadow-md lg:w-2/5 lg:shrink-0">
            <Image
              src="/images/collaborations/poster_1.PNG"
              alt="BR41N.IO Spring School 2026 Hackathon Flyer"
              className="w-full object-contain"
            />
          </div>

          {/* Event Details */}
          <div className="flex-1">
            <h2 className="mb-6 text-2xl">Event Details</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex gap-4 rounded-xl border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <detail.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-sm text-muted-foreground">{detail.label}</p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Registration */}
      <div className="mx-auto mb-16 max-w-4xl">
        <h2 className="mb-2 text-center text-2xl">Register</h2>
        <p className="mb-8 text-center text-muted-foreground">
          Please register with the official BR41N.IO Spring School 2026 registration portal, and let us know you're coming by signing up through our club as well!
        </p>
        <div className="grid gap-6 md:grid-cols-2">

          {/* Club registration */}
          <div className="flex flex-col rounded-xl border-2 border-primary/30 bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <img
                  src="/images/logo/icon.svg"
                  alt="Club logo"
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    (e.target).style.display = "none";
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg">Neurotech at NC State</h3>
                <p className="text-sm text-muted-foreground">Club registration</p>
              </div>
            </div>
            <p className="mb-6 flex-1 text-sm text-muted-foreground">
              Please let us know if you plan on attending by registering through our club. You must also register through the official BR41N.IO portal to attend, but this helps us with headcount and planning for the event!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYfMbOuBtzDOgKNuOXRXXfw5xHIO3bTuWET4tketcOb94aIg/viewform?usp=sharing&ouid=107303216005536299321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Register with Club
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Host registration */}
          <div className="flex flex-col rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                <img
                  src="/images/collaborations/g-tec-logo.svg"
                  alt="g.tec logo"
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    (e.target).style.display = "none";
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg">BR41N.IO / g.tec</h3>
                <p className="text-sm text-muted-foreground">Official registration</p>
              </div>
            </div>
            <p className="mb-6 flex-1 text-sm text-muted-foreground">
              Register directly with the hosting organization through the official BR41N.IO
              Spring School 2026 registration portal.
            </p>
            <a
              href="https://www.gtec.at/register-for-spring-school-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Register with BR41N.IO
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Schedules */}
      <div className="mx-auto mb-16 max-w-5xl">
        <h2 className="mb-2 text-center text-2xl">Event Schedules</h2>
        <p className="mb-8 text-center text-muted-foreground">
          International spring school schedule alongside our local NC State agenda.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">

          {/* International Schedule */}
          <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
            <div className="border-b p-5">
              <span className="mb-2 inline-block rounded-md bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                International
              </span>
              <h3 className="text-lg font-medium">BR41N.IO Spring School 2026</h3>
              <p className="text-sm text-muted-foreground">
                g.tec medical engineering — April 19–29 · global program
              </p>
            </div>
            <ScheduleAccordion
              days={internationalDays}
              defaultOpenIndex={intlDefaultIndex}
              dotColor="bg-blue-500"
            />
          </div>

          {/* Local Schedule */}
          <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
            <div className="border-b p-5">
              <span className="mb-2 inline-block rounded-md bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                Local — NC State
              </span>
              <h3 className="text-lg font-medium">Neurotech at NC State</h3>
              <p className="text-sm text-muted-foreground">
                Entrepreneurship Garage, Raleigh NC · April 25–26
              </p>
            </div>
            <ScheduleAccordion
              days={localDays}
              defaultOpenIndex={localDefaultIndex}
              dotColor="bg-green-500"
            />
          </div>

        </div>
      </div>


      {/* Sponsors */}
      <div className="mx-auto mb-16 max-w-4xl">
        <h2 className="mb-3 text-center text-xl">Sponsors</h2>
        <p className="mb-8 text-center text-muted-foreground">
          Thank you to our generous sponsors who make this event possible.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-20 w-full items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="max-h-16 max-w-[180px] object-contain"
                  onError={(e) => {
                    const target = e.target;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Fallback if logo fails to load */}
                <div
                  className="hidden h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-medium text-primary"
                  style={{ display: "none" }}
                >
                  {sponsor.name.charAt(0)}
                </div>
              </div>
              <h3 className="mb-2 text-center text-lg font-medium">{sponsor.name}</h3>
              <p className="text-center text-sm text-muted-foreground">{sponsor.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Extra Resources */}
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-2xl">Extra Resources</h2>
        <p className="mb-8 text-center text-muted-foreground">
          Watch past hackathons and tune into any live stream currently airing.
        </p>
        <div className="grid gap-6 md:grid-cols-2">

          {/* Live Stream — left */}
        <div className="flex flex-col rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/10">
            <Youtube className="h-5 w-5 text-red-500" />
        </div>
            <div className="flex-1">
            <h3 className="text-base font-medium">Live Stream / Latest</h3>
            <p className="text-xs text-muted-foreground">g.tec Spring School broadcast</p>
            </div>
        </div>
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
                <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/_fotyamQc6g?si=gJ7kWL9Kss0pkt_k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
                Catch the latest Spring School broadcast or live stream directly above.
            </p>
        </div>

          {/* YouTube Channel — right */}
          <div className="flex flex-col items-center rounded-xl border bg-card p-8 text-center shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
              <Youtube className="h-7 w-7 text-red-500" />
            </div>
            <h3 className="mb-2 text-xl">g.tec YouTube Channel</h3>
            <p className="mb-6 text-muted-foreground">
              Check out past BR41N.IO hackathons, tutorials, and neurotech content on the
              g.tec medical engineering YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/@gtecmedicalengineering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <Youtube className="h-4 w-4" />
              Visit YouTube Channel
            </a>
          </div>

        </div>
      </div>

    </div>
  </section>
);
}