const MODALITY_LABELS = {
  xray: 'X-ray',
  ct: 'CT',
  mri: 'MRI',
  us: 'Ultrasound',
};

const REGION_LABELS = {
  abdomen: 'Abdomen',
  kidney: 'Kidney',
  liver: 'Liver',
  chest: 'Chest',
  chest_abdomen: 'Chest & Abdomen',
  angio_aorta: 'Angio — Aorta',
  angio_coronary: 'Angio — Coronary',
  angio_carotid_brain: 'Angio — Carotid / Brain',
  angio_extremities: 'Angio — Extremities',
  angio_other: 'Angio — Other',
  brain: 'Brain',
  spine: 'Spine',
  kub: 'KUB / Kidney',
  neck: 'Neck / Thyroid',
  doppler_extremity: 'Doppler — Extremity',
  pelvis: 'Pelvis',
  spine_extremity: 'Spine & Extremity',
  extremity: 'Extremity',
  soft_tissue: 'Soft Tissue',
  thyroid: 'Thyroid',
  knee: 'Knee',
};

export function modalityLabel(key) {
  return MODALITY_LABELS[key] || key;
}

export function regionLabel(key) {
  return REGION_LABELS[key] || key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
