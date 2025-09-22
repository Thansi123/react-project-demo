// StartProjectMegaForm.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/**
 * StartProjectMegaForm.jsx
 * - Giant single-file form (expanded Stage details)
 * - Keep Tailwind installed. Uses framer-motion for entrance animations.
 *
 * NOTE: Replace API endpoints and adapt validations where necessary.
 */

/* ---------------------------
   Static Lists (same as before)
   --------------------------- */
const CATEGORY_GROUPS = {
  "Tech & Innovation": [
    "Audio",
    "Camera Gear",
    "Education",
    "Energy & Green Tech",
    "Fashion & Wearables",
    "Food & Beverages",
    "Health & Fitness",
    "Home",
    "Information Technology",
    "Phones & Accessories",
    "Productivity",
    "Software",
    "Transportation",
    "Travel & Outdoors",
    "Other Innovative Products",
  ],
  "Creative Works": [
    "Art",
    "Comics",
    "Dance & Theater",
    "Film",
    "Music",
    "Photography",
    "Podcasts, Blogs & Vlogs",
    "Tabletop Games",
    "Video Games",
    "Web Series & TV Shows",
    "Writing & Publishing",
    "Other Creations",
  ],
  "Community Projects": [
    "Culture",
    "Environment",
    "Human Rights",
    "Local Businesses",
    "Wellness",
    "Other Community Projects",
  ],
};

const STAGES = [
  "Ideation",
  "Pre-Seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C",
  "IPO",
];

/* ---------------------------
   Main Component
   --------------------------- */
function StartProject() {
  const [form, setForm] = useState({
    raisingFor: "Individual",
    location: "UAE",
    bankLocation: "UAE",
    categoryGroup: "Tech & Innovation", // main group
    subCategory: CATEGORY_GROUPS["Tech & Innovation"][0], // subcategory
    title: "",
    subtitle: "",
    description: "",
    logo: null,
    banner: null,
    advantages: ["", "", ""],
    disadvantages: ["", "", ""],
    problems: Array.from({ length: 1 }, () => ({ q: "", a: "" })),
    marketAlternativeExists: "No",
    marketAlternatives: [],
    marketCompetitorExists: "No",
    marketCompetitors: [],
    impactBullets: Array.from({ length: 1 }, () => ""),
    risks: Array.from({ length: 1 }, () => ""),
    challenges: Array.from({ length: 1 }, () => ""),
    googleMeet: "",
    updates: {
      daily: { enabled: false, time: "" },
      weekly: { enabled: false, day: "", time: "" },
    },
    stage: "Ideation",
    stageDetails: {},
    howMuchFundRaising: "",
    willingToGive10Percent: "No",
    shareToPlatformPercentage: "",
    fundBreakdown: Array.from({ length: 1 }, () => ({
      stageName: "Stage 1",
      amount: "",
    })),
    companyWebsite: "",
    profitSharing: "Monthly",
    investmentReturnDays: "",
    shareValueCurrent: "",
    shareValueAfter1Year: "",
    shareValueAfter5Year: "",
    linkedin: "",
    facebook: "",
    instagram: "",
  });

  // Keep fetched projects placeholder
  const [projects, setProjects] = useState([]);

  // Ref map to avoid duplicate shareholder adds per stage
  const lastAddShareholderRef = useRef({});

  useEffect(() => {
    // ensure arrays limited
    if (form.impactBullets.length > 10) {
      setForm((s) => ({ ...s, impactBullets: s.impactBullets.slice(0, 10) }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // state helpers
  const updateField = (name, value) => setForm((s) => ({ ...s, [name]: value }));

  // file to base64 helper
  const fileToBase64 = (file) =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.onerror = (err) => rej(err);
      reader.readAsDataURL(file);
    });

  // updated handleFile with resolution check
  const handleFile = async (e, field, requiredWidth, requiredHeight) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = async () => {
      if (requiredWidth && requiredHeight) {
        if (img.width !== requiredWidth || img.height !== requiredHeight) {
          alert(
            `Invalid resolution for ${field}. Required: ${requiredWidth}x${requiredHeight}px, got ${img.width}x${img.height}px`
          );
          return;
        }
      }
      const base64 = await fileToBase64(file);
      setForm((s) => ({ ...s, [field]: base64 }));
    };
  };

  /* ---------------------------
     Generic List Helpers
     --------------------------- */
  const setListItem = (listName, idx, value) =>
    setForm((s) => {
      const copy = [...(s[listName] || [])];
      copy[idx] = value;
      return { ...s, [listName]: copy };
    });

  const addListItem = (listName, defaultValue = "") =>
    setForm((s) => {
      const copy = [...(s[listName] || [])];
      copy.push(defaultValue);
      return { ...s, [listName]: copy };
    });

  const removeListItem = (listName, idx) =>
    setForm((s) => {
      const copy = [...(s[listName] || [])];
      copy.splice(idx, 1);
      return { ...s, [listName]: copy };
    });

  /* ---------------------------
     Problems Q&A helpers
     --------------------------- */
  const addProblem = () =>
    setForm((s) => {
      if (s.problems.length >= 10) return s;
      return { ...s, problems: [...s.problems, { q: "", a: "" }] };
    });

  const updateProblem = (idx, key, value) =>
    setForm((s) => {
      const copy = [...s.problems];
      copy[idx] = { ...copy[idx], [key]: value };
      return { ...s, problems: copy };
    });

  const removeProblem = (idx) =>
    setForm((s) => {
      const copy = [...s.problems];
      copy.splice(idx, 1);
      return { ...s, problems: copy };
    });

  /* ---------------------------
     Market Alternatives / Competitors
     --------------------------- */
  const addMarketAlternative = () =>
    setForm((s) => {
      if (s.marketAlternatives.length >= 5) return s;
      return { ...s, marketAlternatives: [...s.marketAlternatives, { name: "", website: "" }] };
    });

  const updateMarketAlternative = (idx, key, value) =>
    setForm((s) => {
      const copy = [...s.marketAlternatives];
      copy[idx] = { ...copy[idx], [key]: value };
      return { ...s, marketAlternatives: copy };
    });

  const removeMarketAlternative = (idx) =>
    setForm((s) => {
      const copy = [...s.marketAlternatives];
      copy.splice(idx, 1);
      return { ...s, marketAlternatives: copy };
    });

  const addCompetitor = () =>
    setForm((s) => {
      if (s.marketCompetitors.length >= 5) return s;
      return {
        ...s,
        marketCompetitors: [
          ...s.marketCompetitors,
          { name: "", website: "", features: [{ name: "", desc: "" }] },
        ],
      };
    });

  const updateCompetitor = (idx, key, value) =>
    setForm((s) => {
      const copy = [...s.marketCompetitors];
      copy[idx] = { ...copy[idx], [key]: value };
      return { ...s, marketCompetitors: copy };
    });

  const removeCompetitor = (idx) =>
    setForm((s) => {
      const copy = [...s.marketCompetitors];
      copy.splice(idx, 1);
      return { ...s, marketCompetitors: copy };
    });

  const addCompetitorFeature = (cIdx) =>
    setForm((s) => {
      const copy = [...s.marketCompetitors];
      if (!copy[cIdx].features) copy[cIdx].features = [];
      if (copy[cIdx].features.length >= 100) return s;
      copy[cIdx].features.push({ name: "", desc: "" });
      return { ...s, marketCompetitors: copy };
    });

  const updateCompetitorFeature = (cIdx, fIdx, key, value) =>
    setForm((s) => {
      const copy = [...s.marketCompetitors];
      copy[cIdx].features[fIdx] = { ...copy[cIdx].features[fIdx], [key]: value };
      return { ...s, marketCompetitors: copy };
    });

  /* ---------------------------
     Stage Details helpers (expanded)
     --------------------------- */
  const ensureStageDetails = (stageName) =>
    setForm((s) => {
      const sd = { ...(s.stageDetails || {}) };
      if (!sd[stageName]) {
        sd[stageName] = {
          totalInvestment: "",
          totalShareHoldersCount: 0,
          shareholders: [], // ✅ start empty, don't add default row
          launched: { status: "No", date: "" },
          revenues: [],
          profits: [],
          next5YearsProjection: "",
          totalPublicSharesPercentage: "",
        };
      }
      return { ...s, stageDetails: sd };
    });

  const updateStageField = (stageName, key, value) =>
    setForm((s) => {
      const sd = { ...(s.stageDetails || {}) };
      sd[stageName] = { ...(sd[stageName] || {}), [key]: value };
      return { ...s, stageDetails: sd };
    });

  // FIXED addShareholder: prevents double-adds by using adding state properly
  const [adding, setAdding] = useState(false);

  const addShareholder = (stageName) => {
    if (adding) return; // Prevent multiple clicks
    setAdding(true);
    setForm((s) => {
      const sd = { ...(s.stageDetails || {}) };
      sd[stageName] = sd[stageName] || {};
      sd[stageName].shareholders = sd[stageName].shareholders || [];
      if (sd[stageName].shareholders.length >= 40) {
        setAdding(false);
        return s;
      }

      sd[stageName].shareholders.push({
        name: "",
        photo: null,
        shares: "",
        amountInvested: "",
      });
      return { ...s, stageDetails: sd };
    });
    // Reset adding state after state update
    setTimeout(() => setAdding(false), 0);
  };

  const updateShareholder = (stageName, idx, field, value) => {
    setForm((s) => {
      const sd = { ...(s.stageDetails || {}) };
      const shareholders = [...(sd[stageName].shareholders || [])];
      shareholders[idx] = { ...shareholders[idx], [field]: value };
      sd[stageName].shareholders = shareholders;
      return { ...s, stageDetails: sd };
    });
  };

  const removeShareholder = (stageName, idx) => {
    setForm((s) => {
      const sd = { ...(s.stageDetails || {}) };
      const shareholders = [...(sd[stageName].shareholders || [])];
      shareholders.splice(idx, 1);
      sd[stageName].shareholders = shareholders;
      return { ...s, stageDetails: sd };
    });
  };

  const handleShareholderPhoto = (e, stageName, idx) => {
    const file = e.target.files[0];
    if (!file) return;
    setForm((s) => {
      const sd = { ...(s.stageDetails || {}) };
      const shareholders = [...(sd[stageName].shareholders || [])];
      shareholders[idx] = { ...shareholders[idx], photo: file };
      sd[stageName].shareholders = shareholders;
      return { ...s, stageDetails: sd };
    });
  };

  const setRevenueYears = (stageName, years) =>
    setForm((s) => {
      const sd = { ...(s.stageDetails || {}) };
      sd[stageName] = sd[stageName] || {};
      const n = Math.min(Math.max(parseInt(years) || 0, 0), 100);
      sd[stageName].revenues = Array.from({ length: n }, (_, i) => sd[stageName].revenues?.[i] || "");
      sd[stageName].profits = Array.from({ length: n }, (_, i) => sd[stageName].profits?.[i] || "");
      return { ...s, stageDetails: sd };
    });

  /* ---------------------------
     Fund Breakdown helpers
     --------------------------- */
  const addFundBreakdown = () =>
    setForm((s) => {
      if (s.fundBreakdown.length >= 11) return s;
      return { ...s, fundBreakdown: [...s.fundBreakdown, { stageName: `Stage ${s.fundBreakdown.length + 1}`, amount: "" }] };
    });

  const updateFundBreakdown = (idx, key, value) =>
    setForm((s) => {
      const copy = [...s.fundBreakdown];
      copy[idx] = { ...copy[idx], [key]: value };
      return { ...s, fundBreakdown: copy };
    });

  /* ---------------------------
     Submit
     --------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title) return alert("Please enter project title");
    if ((form.description || "").trim().split(/\s+/).filter(Boolean).length > 200) {
      return alert("Description must be 200 words max");
    }

    const payload = { ...form };
    // Replace with your API call
    try {
      // const res = await fetch("/api/projects", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload) });
      // if (!res.ok) throw new Error("Failed");
      alert("Project submitted (demo) — check console for payload.");
      console.log("Payload:", payload);
    } catch (err) {
      console.error(err);
      alert("Failed to submit (demo).");
    }
  };

  /* ---------------------------
     Animations variants for framer-motion
     --------------------------- */
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
  };

  /* ---------------------------
     Render
     --------------------------- */
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient animation (same as Login) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-yellow-500 to-yellow-500 animate-gradient-diagonal z-0"></div>

      <div className="relative max-w-6xl mx-auto py-12 px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="bg-gray-50 bg-opacity-40 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10 z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2"
          >
            Launch Project
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 mb-6"
          >
            Submit your project (UAE only). Everything below maps to the platform requirements for verification & investor transparency.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row: Raising For / Location / Bank Location */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Money Raising For</span>
                <select
                  value={form.raisingFor}
                  onChange={(e) => updateField("raisingFor", e.target.value)}
                  className="mt-1 w-full border rounded px-3 py-2"
                >
                  <option>Individual</option>
                  <option>Business</option>
                  <option>Non-Profit</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Location (Country)</span>
                <select value={form.location} onChange={(e) => updateField("location", e.target.value)} className="mt-1 w-full border rounded px-3 py-2">
                  <option>UAE</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Bank Location</span>
                <select value={form.bankLocation} onChange={(e) => updateField("bankLocation", e.target.value)} className="mt-1 w-full border rounded px-3 py-2">
                  <option>UAE</option>
                </select>
              </label>
            </motion.div>

            {/* Category Group + SubCategory */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Category Group</span>
                <select
                  value={form.categoryGroup}
                  onChange={(e) =>
                    setForm((s) => ({
                      ...s,
                      categoryGroup: e.target.value,
                      subCategory: CATEGORY_GROUPS[e.target.value][0], // reset subcategory
                    }))
                  }
                  className="mt-1 w-full border rounded px-3 py-2"
                >
                  {Object.keys(CATEGORY_GROUPS).map((group) => (
                    <option key={group}>{group}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Sub-Category</span>
                <select
                  value={form.subCategory}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, subCategory: e.target.value }))
                  }
                  className="mt-1 w-full border rounded px-3 py-2"
                >
                  {CATEGORY_GROUPS[form.categoryGroup].map((sub) => (
                    <option key={sub}>{sub}</option> 
                  ))}
                </select>
              </label>
            </motion.div>

            {/* Title / Subtitle / Description */}
            <motion.div className="grid grid-cols-1 gap-4">
              <input value={form.title} onChange={(e) => updateField("title", e.target.value)} name="title" placeholder="Project Title" className="w-full border rounded px-3 py-3 text-lg font-medium" />
              <input value={form.subtitle} onChange={(e) => updateField("subtitle", e.target.value)} name="subtitle" placeholder="Subtitle (short)" className="w-full border rounded px-3 py-2" />
              <textarea value={form.description} onChange={(e) => updateField("description", e.target.value)} name="description" placeholder="Description (max 200 words)" className="w-full border rounded px-3 py-3" rows={4} />
              <div className="text-sm text-right text-gray-500">Words: {form.description ? form.description.trim().split(/\s+/).filter(Boolean).length : 0} / 200</div>
            </motion.div>

            {/* Logo */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Logo Image (Resolution: 300x300)</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFile(e, "logo", 300, 300)} // enforce 300x300
                className="mt-1 block w-full"
              />
              {form.logo && (
                <img
                  src={form.logo}
                  alt="logo preview"
                  className="mt-2 h-20 object-contain rounded"
                />
              )}
            </label>

            {/* Banner */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Banner Image (Resolution: 1200x400)</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFile(e, "banner", 1200, 400)} // enforce 1200x400
                className="mt-1 block w-full"
              />
              {form.banner && (
                <img
                  src={form.banner}
                  alt="banner preview"
                  className="mt-2 h-28 w-full object-cover rounded"
                />
              )}
            </label>

            {/* Advantages / Disadvantages */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Advantages (3 bullets)</div>
                {form.advantages.map((a, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input value={a} onChange={(e) => setListItem("advantages", i, e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder={`Advantage ${i + 1}`} />
                  </div>
                ))}
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Disadvantages (3 bullets)</div>
                {form.disadvantages.map((d, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input value={d} onChange={(e) => setListItem("disadvantages", i, e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder={`Disadvantage ${i + 1}`} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Problems Q&A */}
            <motion.div className="bg-white border rounded p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-medium text-gray-700">Problems — Q & A (up to 10)</div>
                <div>
                  <button type="button" onClick={addProblem} className="text-sm bg-yellow-500 text-white px-3 py-1 rounded">Add</button>
                </div>
              </div>
              <div className="space-y-3">
                {form.problems.map((pa, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
                    <input placeholder={`Question ${idx + 1}`} value={pa.q} onChange={(e) => updateProblem(idx, "q", e.target.value)} className="border rounded px-3 py-2 md:col-span-1" />
                    <input placeholder={`Answer ${idx + 1}`} value={pa.a} onChange={(e) => updateProblem(idx, "a", e.target.value)} className="border rounded px-3 py-2 md:col-span-1" />
                    <div className="flex gap-2">
                      <button type="button" onClick={() => removeProblem(idx)} className="bg-black text-white px-3 rounded">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Market Alternatives */}
            <motion.div className="bg-white border rounded p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-medium text-gray-700">
                  Market Alternative Companies?
                </div>
                <div>
                  <select
                    value={form.marketAlternativeExists}
                    onChange={(e) => updateField("marketAlternativeExists", e.target.value)}
                    className="border rounded px-2 py-1 mr-2"
                  >
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                  {form.marketAlternativeExists === "Yes" && (
                    <button
                      type="button"
                      onClick={addMarketAlternative}
                      className={`px-3 py-1 rounded ${form.marketAlternatives.length >= 5 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-yellow-500 text-white hover:bg-yellow-600"}`}
                      disabled={form.marketAlternatives.length >= 5}
                      title={form.marketAlternatives.length >= 5 ? "Maximum 5 companies allowed" : "Add Company"}
                    >
                      Add Company (max 5)
                    </button>
                  )}
                </div>
              </div>

              {form.marketAlternatives.map((m, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center border rounded p-2 mb-2">
                  <input
                    placeholder="Company Name"
                    value={m.name}
                    onChange={(e) => updateMarketAlternative(idx, "name", e.target.value)}
                    className="border rounded px-3 py-2"
                  />
                  <input
                    placeholder="Website"
                    value={m.website}
                    onChange={(e) => updateMarketAlternative(idx, "website", e.target.value)}
                    className="border rounded px-3 py-2"
                  />
                  <button type="button" onClick={() => removeMarketAlternative(idx)} className="bg-black text-white px-3 py-1 rounded">Remove</button>
                </div>
              ))}
            </motion.div>

            {/* Market Competitors */}
            <motion.div className="bg-white border rounded p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-medium text-gray-700">
                  Market Competitor Companies?
                </div>
                <div>
                  <select
                    value={form.marketCompetitorExists}
                    onChange={(e) => updateField("marketCompetitorExists", e.target.value)}
                    className="border rounded px-2 py-1 mr-2"
                  >
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                  {form.marketCompetitorExists === "Yes" && (
                    <button
                      type="button"
                      onClick={addCompetitor}
                      className={`px-3 py-1 rounded ${form.marketCompetitors.length >= 5 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-yellow-500 text-white hover:bg-yellow-600"}`}
                      disabled={form.marketCompetitors.length >= 5}
                      title={form.marketCompetitors.length >= 5 ? "Maximum 5 competitors allowed" : "Add Competitor"}
                    >
                      Add Competitor (max 5)
                    </button>
                  )}
                </div>
              </div>

              {form.marketCompetitors.map((comp, cIdx) => (
                <div key={cIdx} className="border rounded p-3 mb-3">
                  {/* Company Name + Website (same as Market Alternatives) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center mb-3">
                    <input
                      placeholder="Company Name"
                      value={comp.name}
                      onChange={(e) => updateCompetitor(cIdx, "name", e.target.value)}
                      className="border rounded px-3 py-2"
                    />
                    <input
                      placeholder="Website"
                      value={comp.website}
                      onChange={(e) => updateCompetitor(cIdx, "website", e.target.value)}
                      className="border rounded px-3 py-2"
                    />
                    <button type="button" onClick={() => removeCompetitor(cIdx)} className="bg-black text-white px-3 py-1 rounded">Remove</button>
                  </div>

                  {/* Features list */}
                  <div className="mb-2 text-sm text-gray-700">Special features / functions (up to 100)</div>
                  <div className="space-y-2">
                    {comp.features?.map((f, fIdx) => (
                      <div key={fIdx} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <input
                          placeholder="Feature name"
                          value={f.name}
                          onChange={(e) => updateCompetitorFeature(cIdx, fIdx, "name", e.target.value)}
                          className="border rounded px-3 py-2"
                        />
                        <textarea
                          placeholder="Detailed description"
                          value={f.desc}
                          onChange={(e) => updateCompetitorFeature(cIdx, fIdx, "desc", e.target.value)}
                          className="border rounded px-3 py-2 h-24 resize-y"
                        />
                      </div>
                    ))}
                    <div className="flex gap-2 mt-2">
                      <button type="button" onClick={() => addCompetitorFeature(cIdx)} className="bg-green-600 text-white px-3 py-1 rounded">Add Feature</button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Impact / Risks / Challenges (we included previously in another step, but keep here for completeness) */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Market Impact (up to 10)</div>
                {form.impactBullets.map((v, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input value={v} onChange={(e) => setListItem("impactBullets", i, e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder={`Impact ${i + 1}`} />
                    <button type="button" onClick={() => removeListItem("impactBullets", i)} className="bg-black text-white px-2 rounded">X</button>
                  </div>
                ))}
                <div className="mt-2">
                  <button type="button" onClick={() => addListItem("impactBullets", "")} className="bg-yellow-500 text-white px-3 py-1 rounded">Add</button>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Market Risks (up to 10)</div>
                {form.risks.map((v, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input value={v} onChange={(e) => setListItem("risks", i, e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder={`Risk ${i + 1}`} />
                    <button type="button" onClick={() => removeListItem("risks", i)} className="bg-black text-white px-2 rounded">X</button>
                  </div>
                ))}
                <div className="mt-2">
                  <button type="button" onClick={() => addListItem("risks", "")} className="bg-yellow-500 text-white px-3 py-1 rounded">Add</button>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Market Challenges (up to 10)</div>
                {form.challenges.map((v, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input value={v} onChange={(e) => setListItem("challenges", i, e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder={`Challenge ${i + 1}`} />
                    <button type="button" onClick={() => removeListItem("challenges", i)} className="bg-black text-white px-2 rounded">X</button>
                  </div>
                ))}
                <div className="mt-2">
                  <button type="button" onClick={() => addListItem("challenges", "")} className="bg-yellow-500 text-white px-3 py-1 rounded">Add</button>
                </div>
              </div>
            </motion.div>

            {/* Google Meet + Updates */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Google Meet </div>
                <input placeholder="Meet link" value={form.googleMeet} onChange={(e) => updateField("googleMeet", e.target.value)} className="w-full border rounded px-3 py-2" />
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Daily Update?</div>
                <div className="flex items-center gap-2">
                  <select value={form.updates.daily.enabled ? "Yes" : "No"} onChange={(e) => updateField("updates", { ...form.updates, daily: { ...form.updates.daily, enabled: e.target.value === "Yes" } })} className="border rounded px-2 py-1">
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                  {form.updates.daily.enabled && <input type="time" value={form.updates.daily.time} onChange={(e) => updateField("updates", { ...form.updates, daily: { ...form.updates.daily, time: e.target.value } })} className="border rounded px-2 py-1" />}
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Weekly Update?</div>
                <div className="flex items-center gap-2">
                  <select value={form.updates.weekly.enabled ? "Yes" : "No"} onChange={(e) => updateField("updates", { ...form.updates, weekly: { ...form.updates.weekly, enabled: e.target.value === "Yes" } })} className="border rounded px-2 py-1">
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                  {form.updates.weekly.enabled && (
                    <div className="flex items-center gap-2">
                      {/* Day of Week */}
                      <select
                        value={form.updates.weekly.day || ""}
                        onChange={(e) =>
                          updateField("updates", {
                            ...form.updates,
                            weekly: { ...form.updates.weekly, day: e.target.value },
                          })
                        }
                        className="border rounded px-2 py-1"
                      >
                        <option value="">Select Day</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                      </select>

                      {/* Time */}
                      <input
                        type="time"
                        value={form.updates.weekly.time || ""}
                        onChange={(e) =>
                          updateField("updates", {
                            ...form.updates,
                            weekly: { ...form.updates.weekly, time: e.target.value },
                          })
                        }
                        className="border rounded px-2 py-1"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* ---------------------------
                Stage selection + StageDetailsPanel (expanded)
                --------------------------- */}
            <motion.div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-700">Stage of Project</div>
                <select value={form.stage} onChange={(e) => { updateField("stage", e.target.value); ensureStageDetails(e.target.value); }} className="border rounded px-2 py-1">
                  {STAGES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>

              <StageDetailsPanel
                stageName={form.stage}
                data={form.stageDetails?.[form.stage] || {}}
                ensure={() => ensureStageDetails(form.stage)}
                update={(k, v) => updateStageField(form.stage, k, v)}
                addShareholder={() => addShareholder(form.stage)}
                updateShareholder={(idx, key, value) => updateShareholder(form.stage, idx, key, value)}
                removeShareholder={(idx) => removeShareholder(form.stage, idx)}
                handleShareholderPhoto={(e, idx) => handleShareholderPhoto(e, form.stage, idx)}
                setRevenueYears={(years) => setRevenueYears(form.stage, years)}
              />
            </motion.div>

            {/* Fundraising amount & 10% share question */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input placeholder="How much fundraising (AED)" value={form.howMuchFundRaising} onChange={(e) => updateField("howMuchFundRaising", e.target.value)} className="border rounded px-3 py-2" />
              <div>
                <div className="text-sm font-medium text-gray-700">Willing to give 10% share to platform?</div>
                <select value={form.willingToGive10Percent} onChange={(e) => updateField("willingToGive10Percent", e.target.value)} className="border rounded px-2 py-1">
                  <option>No</option>
                  <option>Yes</option>
                </select>
                {form.willingToGive10Percent === "Yes" && (
                  <input placeholder="Out of 10%, how much (%)" value={form.shareToPlatformPercentage} onChange={(e) => updateField("shareToPlatformPercentage", e.target.value)} className="mt-2 border rounded px-3 py-2" />
                )}
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700">Company Website</div>
                <input placeholder="Website URL (optional)" value={form.companyWebsite} onChange={(e) => updateField("companyWebsite", e.target.value)} className="border rounded px-3 py-2" />
              </div>
            </motion.div>

            {/* Fund breakdown stages (11 max) */}
            <motion.div className="bg-white border rounded p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-medium text-gray-700">Breakdown of fund usage (up to 11)</div>
                <button type="button" onClick={addFundBreakdown} className="bg-yellow-500 text-white px-3 py-1 rounded">Add Stage</button>
              </div>
              <div className="space-y-2">
                {form.fundBreakdown.map((fb, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                    <input value={fb.stageName} onChange={(e) => updateFundBreakdown(idx, "stageName", e.target.value)} className="border rounded px-3 py-2" />
                    <input value={fb.amount} onChange={(e) => updateFundBreakdown(idx, "amount", e.target.value)} placeholder="Amount AED" className="border rounded px-3 py-2" />
                    <div />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Profit sharing / share value / socials */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Profit sharing</div>
                <select value={form.profitSharing} onChange={(e) => updateField("profitSharing", e.target.value)} className="border rounded px-2 py-1">
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
                <input placeholder="Investment return days (number)" value={form.investmentReturnDays} onChange={(e) => updateField("investmentReturnDays", e.target.value)} className="mt-2 border rounded px-3 py-2" />
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Share Value (AED)</div>
                <input placeholder="Current" value={form.shareValueCurrent} onChange={(e) => updateField("shareValueCurrent", e.target.value)} className="border rounded px-3 py-2 mb-2" />
                <input placeholder="After 1 Year" value={form.shareValueAfter1Year} onChange={(e) => updateField("shareValueAfter1Year", e.target.value)} className="border rounded px-3 py-2 mb-2" />
                <input placeholder="After 5 Years" value={form.shareValueAfter5Year} onChange={(e) => updateField("shareValueAfter5Year", e.target.value)} className="border rounded px-3 py-2" />
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Social Links</div>
                <input placeholder="LinkedIn" value={form.linkedin} onChange={(e) => updateField("linkedin", e.target.value)} className="border rounded px-3 py-2 mb-2" />
                <input placeholder="Facebook" value={form.facebook} onChange={(e) => updateField("facebook", e.target.value)} className="border rounded px-3 py-2 mb-2" />
                <input placeholder="Instagram" value={form.instagram} onChange={(e) => updateField("instagram", e.target.value)} className="border rounded px-3 py-2" />
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div className="flex justify-center">
              <button type="submit" className="bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transform transition">
                Submit Project
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Example fetched projects card */}
        {projects.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Your projects</h3>
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.id} className="border rounded p-3 bg-white">
                  <div className="font-bold">{p.title}</div>
                  <div className="text-sm text-gray-600">{p.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations (gradient + small animations) */}
      <style>
        {`
          @keyframes gradientDiagonal {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          .animate-gradient-diagonal {
            background-size: 300% 300%;
            animation: gradientDiagonal 15s ease infinite;
          }
        `}
      </style>
    </section>
  );
}

/* ---------------------------
   StageDetailsPanel Component (expanded)
   - Handles each stage: total investment, shareholders list (up to 40),
     launched status, revenue/profit columns, next 5-year projection, IPO public share %
   --------------------------- */
function StageDetailsPanel({
  stageName,
  data = {},
  ensure = () => {},
  update = () => {},
  addShareholder = () => {},
  updateShareholder = () => {},
  removeShareholder = () => {},
  handleShareholderPhoto = () => {},
  setRevenueYears = () => {},
}) {
  useEffect(() => {
    ensure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [yearsInput, setYearsInput] = useState("");

  return (
    <div className="bg-white border rounded p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-lg font-semibold">{stageName} Details</div>
        <div className="text-sm text-gray-500">Dynamic fields based on stage</div>
      </div>

      {/* Total Investment + Launched */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <input
          placeholder="Total Investment (AED)"
          value={data.totalInvestment || ""}
          onChange={(e) => update("totalInvestment", e.target.value)}
          className="border rounded px-3 py-2"
        />

        <div>
          <div className="text-sm text-gray-700 mb-1">Launched?</div>
          <select
            value={data.launched?.status || "No"}
            onChange={(e) =>
              update("launched", { ...(data.launched || {}), status: e.target.value })
            }
            className="border rounded px-2 py-1 w-full"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
          {data.launched?.status === "Yes" && (
            <input
              type="date"
              value={data.launched?.date || ""}
              onChange={(e) =>
                update("launched", { ...(data.launched || {}), date: e.target.value })
              }
              className="mt-2 border rounded px-3 py-2 w-full"
            />
          )}
        </div>
      </div>

      {/* Shareholders - ONLY ONE SECTION */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium text-gray-700">
            Shareholders (add up to 40)
          </div>
          <button
            type="button"
            onClick={addShareholder}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {(data.shareholders || []).map((sh, idx) => (
            <div key={idx} className="flex gap-2 mb-2 items-center">
              <input
                type="text"
                placeholder="Name"
                value={sh.name}
                onChange={(e) => updateShareholder(idx, "name", e.target.value)}
                className="flex-1 border rounded p-2"
              />
              <input
                type="text"
                placeholder="% Shares"
                value={sh.shares}
                onChange={(e) => updateShareholder(idx, "shares", e.target.value)}
                className="w-24 border rounded p-2"
              />
              <input
                type="text"
                placeholder="Amount Invested AED"
                value={sh.amountInvested}
                onChange={(e) =>
                  updateShareholder(idx, "amountInvested", e.target.value)
                }
                className="flex-1 border rounded p-2"
              />
              <div className="flex flex-col">
                <input
                  type="file"
                  onChange={(e) => handleShareholderPhoto(e, idx)}
                  className="text-sm"
                />
              </div>
              <button
                type="button"
                onClick={() => removeShareholder(idx)}
                className="bg-black text-white px-3 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue / Profit */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-sm font-medium text-gray-700">Revenue/Profit columns</div>
          <input
            placeholder="No. of years (max 100)"
            type="number"
            min={0}
            max={100}
            value={yearsInput}
            onChange={(e) => setYearsInput(e.target.value)}
            className="border rounded px-3 py-1 w-40"
          />
          <button
            type="button"
            onClick={() => {
              setRevenueYears(yearsInput);
              setYearsInput("");
            }}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Create
          </button>
        </div>

        {(data.revenues || []).length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
            {data.revenues.map((r, i) => (
              <div key={i} className="grid grid-cols-2 gap-2 items-center">
                <input
                  placeholder={`Revenue year ${i + 1}`}
                  value={r || ""}
                  onChange={(e) => {
                    const newRevs = [...(data.revenues || [])];
                    newRevs[i] = e.target.value;
                    update("revenues", newRevs);
                  }}
                  className="border rounded px-3 py-2"
                />
                <input
                  placeholder={`Profit year ${i + 1}`}
                  value={data.profits?.[i] || ""}
                  onChange={(e) => {
                    const newProf = [...(data.profits || [])];
                    newProf[i] = e.target.value;
                    update("profits", newProf);
                  }}
                  className="border rounded px-3 py-2"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <input
          placeholder="Next 5 year projection (AED)"
          value={data.next5YearsProjection || ""}
          onChange={(e) => update("next5YearsProjection", e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      {stageName === "IPO" && (
        <div className="mb-3">
          <div className="text-sm font-medium text-gray-700 mb-2">IPO Specifics</div>
          <input
            placeholder="Total public shares (%)"
            value={data.totalPublicSharesPercentage || ""}
            onChange={(e) =>
              update("totalPublicSharesPercentage", e.target.value)
            }
            className="border rounded px-3 py-2 w-full mb-2"
          />
          <input
            placeholder="Total Investment (AED) - IPO"
            value={data.totalInvestment || ""}
            onChange={(e) => update("totalInvestment", e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
      )}
    </div>
  );
}

/* ---------------------------
   export
   --------------------------- */
export default StartProject;