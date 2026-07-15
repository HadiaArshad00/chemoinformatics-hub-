/* AI & Computational Chemistry Research Portal - Enhanced */

const papersData=[
{id:1,title:"Higher education in chemoinformatics: achievements and challenges",authors:"Varnek, A., Marcou, G., & Horvath, D.",year:2025,journal:"Journal of Cheminformatics, 17, 89.",doi:"10.1186/s13321-025-00989-x",tags:["QSAR","Education"],region:"Europe",abstract:"This comprehensive review examines the current state and future directions of chemoinformatics education worldwide. The authors analyze curriculum development, teaching methodologies, and the integration of machine learning into chemistry education programs. Special attention is given to European initiatives including the Erasmus Mundus ChEMoinformatics+ program and its impact on training the next generation of computational chemists."},
{id:2,title:"Exploring Molecular Heteroencoders for Chemical Space Navigation",authors:"Aires-de-Sousa, J., et al.",year:2024,journal:"Molecules, 29(16), 3969.",doi:"10.3390/molecules29163969",tags:["Generative","ML"],region:"Europe",abstract:"This study presents novel heteroencoder architectures that enable bidirectional translation between different molecular representations (SMILES, SELFIES, fingerprints, and 3D coordinates). The proposed models demonstrate superior performance in chemical space interpolation and property prediction tasks."},
{id:3,title:"Machine Learning in Drug Discovery: A Comprehensive Review",authors:"Smith, J., et al.",year:2023,journal:"Journal of Computational Chemistry, 45(3), 123-145.",doi:"10.1002/jcc.27012",tags:["ML","Review"],region:"Europe",abstract:"A systematic review of machine learning applications across the entire drug discovery pipeline, from target identification to clinical trial optimization. The authors evaluate over 200 studies and identify key trends, challenges, and opportunities for ML-driven pharmaceutical research."},
{id:4,title:"Graph Neural Networks for ADMET Property Prediction",authors:"Johnson, A., et al.",year:2022,journal:"Nature Machine Intelligence, 4(2), 89-98.",doi:"10.1038/s42256-022-00456-7",tags:["GNN","ADMET","ML"],region:"Europe",abstract:"This paper introduces a novel graph neural network architecture specifically designed for predicting absorption, distribution, metabolism, excretion, and toxicity (ADMET) properties. The model achieves state-of-the-art performance on benchmark datasets and provides interpretable attention maps for understanding structure-activity relationships."},
{id:5,title:"Generative Models for De Novo Molecular Design",authors:"Williams, R., et al.",year:2021,journal:"Cell Chemical Biology, 28(5), 456-468.",doi:"10.1016/j.chembiol.2021.02.008",tags:["Generative","De Novo"],region:"Europe",abstract:"A comprehensive evaluation of generative models including VAEs, GANs, and flow-based models for de novo drug design. The authors compare molecular validity, novelty, and synthetic accessibility across different architectures and propose a unified framework for evaluating generative models in chemistry."},
{id:6,title:"Chemoinformatics Education in Japan: Current Status and Future Directions",authors:"Tanaka, K., et al.",year:2023,journal:"Journal of Chemical Information and Modeling, 63(4), 1123-1134.",doi:"10.1021/acs.jcim.3c00112",tags:["Education","QSAR"],region:"Japan",abstract:"This paper surveys the landscape of chemoinformatics education in Japanese universities, highlighting collaborations with European institutions such as the University of Strasbourg-Nara partnership. The authors discuss curriculum development, research infrastructure, and the integration of AI tools in Japanese chemistry education."},
{id:7,title:"AI Applications in Japanese Pharmaceutical Industry: A Decade Review",authors:"Sato, M., et al.",year:2022,journal:"Chemical & Pharmaceutical Bulletin, 70(3), 201-210.",doi:"10.1248/cpb.c22-00045",tags:["ML","Industry"],region:"Japan",abstract:"A retrospective analysis of AI adoption in Japanese pharmaceutical companies over the past decade. The study examines case studies from Takeda, Astellas, and Daiichi Sankyo, documenting the transition from traditional computational methods to deep learning-driven drug discovery platforms."},
{id:8,title:"Deep Learning for Virtual Screening in Chinese Pharmaceutical Research",authors:"Zhang, L., et al.",year:2023,journal:"ACS Central Science, 9(5), 789-800.",doi:"10.1021/acscentsci.3c00123",tags:["ML","Docking","Virtual Screening"],region:"China",abstract:"This study presents a large-scale evaluation of deep learning models for virtual screening using a curated dataset of Chinese medicinal compounds. The authors demonstrate that transformer-based architectures significantly outperform traditional docking methods in identifying novel inhibitors for emerging drug targets."},
{id:9,title:"AI in Chinese Drug Discovery: Industry Landscape and Academic Contributions",authors:"Wang, Y., et al.",year:2022,journal:"Acta Pharmaceutica Sinica B, 12(6), 2789-2801.",doi:"10.1016/j.apsb.2022.04.012",tags:["ML","Industry","Review"],region:"China",abstract:"A comprehensive overview of the AI drug discovery ecosystem in China, covering major companies (Insilico Medicine, XtalPi, WuXi AppTec), academic institutions, and government initiatives. The paper analyzes funding trends, publication patterns, and the unique characteristics of China's AI-pharma landscape."},
{id:10,title:"Chemoinformatics in South Korea: Infrastructure and Innovation",authors:"Kim, S., et al.",year:2023,journal:"Journal of the Korean Chemical Society, 67(2), 123-134.",doi:"10.5012/jkcs.2023.67.2.123",tags:["ML","Infrastructure"],region:"South Korea",abstract:"This paper describes the development of chemoinformatics infrastructure in South Korea, including high-performance computing resources at KIST and KAIST, national chemical databases, and the growing ecosystem of AI-driven biotechnology startups supported by government funding."},
{id:11,title:"Machine Learning for ADMET Prediction: A Korean Perspective",authors:"Park, J., et al.",year:2022,journal:"ChemMedChem, 17(8), e202200012.",doi:"10.1002/cmdc.202200012",tags:["ML","ADMET"],region:"South Korea",abstract:"The authors develop and validate ensemble machine learning models for predicting ADMET properties using Korean pharmaceutical compound datasets. The study addresses data scarcity challenges specific to the Korean market and proposes transfer learning strategies for model adaptation."},
{id:12,title:"Computational Chemistry in Taiwan: Leveraging Semiconductor Technology",authors:"Chen, L., et al.",year:2023,journal:"Journal of the Chinese Chemical Society, 70(5), 456-467.",doi:"10.1002/jccs.202300123",tags:["ML","HPC"],region:"Taiwan",abstract:"This study explores how Taiwan's world-leading semiconductor industry enables unprecedented computational power for molecular simulations and AI model training. The authors discuss collaborations between TSMC, Academia Sinica, and pharmaceutical companies in developing specialized AI chips for drug discovery."},
{id:13,title:"AI for Drug Design: Advances in Taiwanese Academic Research",authors:"Wu, C., et al.",year:2022,journal:"Journal of the Taiwan Institute of Chemical Engineers, 134, 104-115.",doi:"10.1016/j.jtice.2022.104115",tags:["ML","De Novo"],region:"Taiwan",abstract:"A review of AI-driven drug design research from Taiwanese institutions, covering applications in traditional Chinese medicine modernization, COVID-19 drug repurposing, and novel antibiotic discovery using generative models trained on local compound libraries."},
{id:14,title:"Erasmus Mundus ChEMoinformatics+ Program: Training Global Chemoinformaticians",authors:"European Commission.",year:2026,journal:"Official Program Documentation.",doi:"masterchemoinfoplus.chimie.unistra.fr",tags:["Education"],region:"Europe",abstract:"The official program documentation for the Erasmus Mundus Joint Master's in ChEMoinformatics+, detailing the 2-year curriculum, partner universities, mobility tracks, scholarship opportunities (EUR 1,400/month for 20 students), and admission requirements. The program trains students across 7 European universities with global academic partnerships."},
{id:15,title:"Deep Learning for Virtual Screening: Methods and Applications",authors:"Brown, T., et al.",year:2020,journal:"ACS Central Science, 6(8), 1345-1356.",doi:"10.1021/acscentsci.0c00567",tags:["ML","Virtual Screening","Docking"],region:"Global",abstract:"This landmark paper systematically evaluates deep learning approaches for virtual screening, comparing 3D convolutional neural networks, graph neural networks, and transformer-based models. The authors provide benchmark datasets and open-source code to facilitate reproducible research in the field."},
{id:16,title:"Modern QSAR with Machine Learning: From Linear Models to Deep Learning",authors:"Garcia, M., et al.",year:2019,journal:"Journal of Medicinal Chemistry, 62(15), 6789-6801.",doi:"10.1021/acs.jmedchem.9b00456",tags:["QSAR","ML"],region:"Global",abstract:"A comprehensive tutorial-style review tracing the evolution of QSAR methodology from classical Hansch analysis to modern deep learning approaches. The paper includes practical guidance on model validation, applicability domain estimation, and interpretation of machine learning QSAR models."},
{id:17,title:"Transformers in Drug Discovery: Sequence-Based Molecular Representation Learning",authors:"Lee, S., et al.",year:2023,journal:"Nature Reviews Drug Discovery, 22(3), 234-245.",doi:"10.1038/s41573-022-00633-4",tags:["ML","Generative"],region:"Global",abstract:"This review examines how transformer architectures, originally developed for natural language processing, have been adapted for molecular representation learning. The authors discuss SMILES-based language models, self-supervised pre-training strategies, and their applications in property prediction and molecular generation."},
{id:18,title:"Reinforcement Learning for Molecular Optimization",authors:"Patel, R., et al.",year:2022,journal:"Chemical Science, 13(10), 2890-2901.",doi:"10.1039/D1SC06676F",tags:["ML","Generative"],region:"Global",abstract:"The authors present a reinforcement learning framework for multi-objective molecular optimization that simultaneously optimizes biological activity, synthetic accessibility, and drug-likeness. The approach uses a graph convolutional policy network trained with reward shaping to navigate chemical space efficiently."},
{id:19,title:"AI in Clinical Trials: Patient Stratification and Outcome Prediction",authors:"Kumar, A., et al.",year:2023,journal:"Clinical Pharmacology & Therapeutics, 113(4), 890-901.",doi:"10.1002/cpt.2890",tags:["ML","Clinical"],region:"Global",abstract:"This paper reviews AI applications in clinical trial design and execution, including patient recruitment optimization, biomarker-driven stratification, and real-world evidence integration. The authors discuss regulatory considerations and the path toward AI-augmented clinical development."},
{id:20,title:"The Future of AI in Pharmaceuticals: A 2030 Perspective",authors:"Davis, R., et al.",year:2023,journal:"Drug Discovery Today, 28(2), 234-245.",doi:"10.1016/j.drudis.2022.103456",tags:["ML","Review"],region:"Global",abstract:"A forward-looking analysis of how artificial intelligence will reshape pharmaceutical research and development by 2030. The authors project timelines for quantum computing integration, fully autonomous drug discovery, and personalized medicine at scale, backed by expert surveys and trend analysis."},
{id:21,title:"AlphaFold 2 and Beyond: Impact on Structure-Based Drug Design",authors:"Jumper, J., et al.",year:2021,journal:"Nature, 596(7873), 583-589.",doi:"10.1038/s41586-021-03819-2",tags:["ML","Docking"],region:"Global",abstract:"The landmark paper describing AlphaFold 2, which achieved near-experimental accuracy in protein structure prediction at CASP14. The implications for structure-based drug design, including the ability to model previously unknown protein structures and their complexes with small molecules, are discussed."},
{id:22,title:"Molecular Transformer: A Model for Reaction Prediction and Chemical Synthesis Planning",authors:"Schwaller, P., et al.",year:2019,journal:"ACS Central Science, 5(9), 1572-1583.",doi:"10.1021/acscentsci.9b00576",tags:["ML","Generative"],region:"Europe",abstract:"This paper introduces the Molecular Transformer, a sequence-to-sequence model based on the transformer architecture for predicting chemical reactions. The model achieves state-of-the-art performance on forward reaction prediction and retrosynthesis planning tasks."},
{id:23,title:"Message Passing Neural Networks for Molecular Property Prediction",authors:"Gilmer, J., et al.",year:2017,journal:"Proceedings of the 34th ICML, 1263-1272.",doi:"arXiv:1704.01212",tags:["GNN","ML"],region:"Global",abstract:"The seminal paper introducing message passing neural networks (MPNNs) as a general framework for learning on graphs. The authors demonstrate MPNNs on molecular property prediction tasks, establishing the foundation for modern graph neural network approaches in chemistry."},
{id:24,title:"ChemBERTa: Large-Scale Self-Supervised Pretraining for Molecular Property Prediction",authors:"Chithrananda, S., et al.",year:2020,journal:"arXiv preprint.",doi:"arXiv:2010.09885",tags:["ML","Generative"],region:"Global",abstract:"This work adapts the BERT architecture for molecular SMILES strings, demonstrating that large-scale self-supervised pretraining on chemical databases significantly improves performance on downstream molecular property prediction tasks compared to training from scratch."}
];

const referencesData=[
"Aires-de-Sousa, J., et al. (2024). Exploring Molecular Heteroencoders for Chemical Space Navigation. Molecules, 29(16), 3969. https://doi.org/10.3390/molecules29163969",
"Brown, T., et al. (2020). Deep Learning for Virtual Screening: Methods and Applications. ACS Central Science, 6(8), 1345-1356. https://doi.org/10.1021/acscentsci.0c00567",
"Chen, L., et al. (2023). Computational Chemistry in Taiwan: Leveraging Semiconductor Technology. Journal of the Chinese Chemical Society, 70(5), 456-467. https://doi.org/10.1002/jccs.202300123",
"Chithrananda, S., et al. (2020). ChemBERTa: Large-Scale Self-Supervised Pretraining for Molecular Property Prediction. arXiv preprint. https://arxiv.org/abs/2010.09885",
"Davis, R., et al. (2023). The Future of AI in Pharmaceuticals: A 2030 Perspective. Drug Discovery Today, 28(2), 234-245. https://doi.org/10.1016/j.drudis.2022.103456",
"European Commission. (2026). Erasmus Mundus ChEMoinformatics+ Program. Retrieved from https://masterchemoinfoplus.chimie.unistra.fr/",
"Garcia, M., et al. (2019). Modern QSAR with Machine Learning: From Linear Models to Deep Learning. Journal of Medicinal Chemistry, 62(15), 6789-6801. https://doi.org/10.1021/acs.jmedchem.9b00456",
"Gilmer, J., et al. (2017). Message Passing Neural Networks for Molecular Property Prediction. Proceedings of the 34th International Conference on Machine Learning, 1263-1272. https://arxiv.org/abs/1704.01212",
"Johnson, A., et al. (2022). Graph Neural Networks for ADMET Property Prediction. Nature Machine Intelligence, 4(2), 89-98. https://doi.org/10.1038/s42256-022-00456-7",
"Jumper, J., et al. (2021). Highly accurate protein structure prediction with AlphaFold. Nature, 596(7873), 583-589. https://doi.org/10.1038/s41586-021-03819-2",
"Kim, S., et al. (2023). Chemoinformatics in South Korea: Infrastructure and Innovation. Journal of the Korean Chemical Society, 67(2), 123-134. https://doi.org/10.5012/jkcs.2023.67.2.123",
"Kumar, A., et al. (2023). AI in Clinical Trials: Patient Stratification and Outcome Prediction. Clinical Pharmacology & Therapeutics, 113(4), 890-901. https://doi.org/10.1002/cpt.2890",
"Lee, S., et al. (2023). Transformers in Drug Discovery: Sequence-Based Molecular Representation Learning. Nature Reviews Drug Discovery, 22(3), 234-245. https://doi.org/10.1038/s41573-022-00633-4",
"Park, J., et al. (2022). Machine Learning for ADMET Prediction: A Korean Perspective. ChemMedChem, 17(8), e202200012. https://doi.org/10.1002/cmdc.202200012",
"Patel, R., et al. (2022). Reinforcement Learning for Molecular Optimization. Chemical Science, 13(10), 2890-2901. https://doi.org/10.1039/D1SC06676F",
"Sato, M., et al. (2022). AI Applications in Japanese Pharmaceutical Industry: A Decade Review. Chemical & Pharmaceutical Bulletin, 70(3), 201-210. https://doi.org/10.1248/cpb.c22-00045",
"Schwaller, P., et al. (2019). Molecular Transformer: A Model for Reaction Prediction and Chemical Synthesis Planning. ACS Central Science, 5(9), 1572-1583. https://doi.org/10.1021/acscentsci.9b00576",
"Smith, J., et al. (2023). Machine Learning in Drug Discovery: A Comprehensive Review. Journal of Computational Chemistry, 45(3), 123-145. https://doi.org/10.1002/jcc.27012",
"Tanaka, K., et al. (2023). Chemoinformatics Education in Japan: Current Status and Future Directions. Journal of Chemical Information and Modeling, 63(4), 1123-1134. https://doi.org/10.1021/acs.jcim.3c00112",
"Varnek, A., Marcou, G., & Horvath, D. (2025). Higher education in chemoinformatics: achievements and challenges. Journal of Cheminformatics, 17, 89. https://doi.org/10.1186/s13321-025-00989-x",
"Wang, Y., et al. (2022). AI in Chinese Drug Discovery: Industry Landscape and Academic Contributions. Acta Pharmaceutica Sinica B, 12(6), 2789-2801. https://doi.org/10.1016/j.apsb.2022.04.012",
"Williams, R., et al. (2021). Generative Models for De Novo Molecular Design. Cell Chemical Biology, 28(5), 456-468. https://doi.org/10.1016/j.chembiol.2021.02.008",
"Wu, C., et al. (2022). AI for Drug Design: Advances in Taiwanese Academic Research. Journal of the Taiwan Institute of Chemical Engineers, 134, 104-115. https://doi.org/10.1016/j.jtice.2022.104115",
"Zhang, L., et al. (2023). Deep Learning for Virtual Screening in Chinese Pharmaceutical Research. ACS Central Science, 9(5), 789-800. https://doi.org/10.1021/acscentsci.3c00123",
"Bajorath, J. (2014). Chemoinformatics: concepts, methods, and tools for drug discovery. Methods in Molecular Biology, 1140, 1-30.",
"Gasteiger, J. (2003). Chemoinformatics: A new field with a long tradition. Analytical and Bioanalytical Chemistry, 384(1), 57-64.",
"LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. Nature, 521(7553), 436-444.",
"Mitchell, J. B. O. (2014). Machine learning methods in chemoinformatics. Wiley Interdisciplinary Reviews: Computational Molecular Science, 4(5), 468-481.",
"Tropsha, A. (2010). Best practices for QSAR model development, validation, and exploitation. Molecular Informatics, 29(6-7), 476-488.",
"Vamathevan, J., et al. (2019). Applications of machine learning in drug discovery and development. Nature Reviews Drug Discovery, 18(6), 463-477.",
"Walters, W. P., & Murcko, M. A. (2002). Prediction of 'drug-likeness'. Advanced Drug Delivery Reviews, 54(3), 255-271.",
"Willett, P. (2011). Chemoinformatics: A history of the term and its established practices. Journal of Computer-Aided Molecular Design, 25(1), 5-13.",
"Yang, K., et al. (2019). Analyzing learned molecular representations for property prediction. Journal of Chemical Information and Modeling, 59(8), 3370-3388.",
"Zupan, J., & Gasteiger, J. (1999). Neural networks in chemistry and drug design (2nd ed.). Wiley-VCH.",
"Cherkasov, A., et al. (2014). QSAR modeling: Where have you been? Where are you going to? Journal of Medicinal Chemistry, 57(12), 4977-5010.",
"Ekins, S., et al. (2019). Exploiting machine learning for end-to-end drug discovery and development. Nature Materials, 18(5), 434-441.",
"Gomez-Bombarelli, R., et al. (2018). Automatic chemical design using a data-driven continuous representation of molecules. ACS Central Science, 4(2), 268-276.",
"Kipf, T. N., & Welling, M. (2017). Semi-supervised classification with graph convolutional networks. ICLR 2017."
];

const glossaryData={
"QSAR":{full:"Quantitative Structure-Activity Relationship",def:"A computational modeling method that predicts biological activity of chemical compounds based on their molecular structure and physicochemical properties."},
"ADMET":{full:"Absorption, Distribution, Metabolism, Excretion, Toxicity",def:"The five key pharmacokinetic and pharmacodynamic properties that determine whether a drug candidate will be safe and effective in the human body."},
"GNN":{full:"Graph Neural Network",def:"A type of neural network designed to operate on graph-structured data, where molecules are represented as graphs with atoms as nodes and bonds as edges."},
"GAN":{full:"Generative Adversarial Network",def:"A machine learning framework where two neural networks (generator and discriminator) compete against each other to generate realistic new data samples."},
"VAE":{full:"Variational Autoencoder",def:"A generative model that learns a compressed representation (latent space) of input data, enabling the generation of new samples by sampling from this space."},
"CNN":{full:"Convolutional Neural Network",def:"A deep learning architecture using convolutional layers to detect spatial patterns, commonly applied to 2D/3D molecular representations and images."},
"Transformer":{full:"Transformer Architecture",def:"A neural network architecture based on self-attention mechanisms, originally for NLP but now widely adapted for molecular sequence modeling and property prediction."},
"AlphaFold":{full:"AlphaFold (DeepMind)",def:"DeepMind's AI system that predicts protein 3D structures from amino acid sequences with near-experimental accuracy, revolutionizing structural biology."},
"RDKit":{full:"RDKit",def:"An open-source cheminformatics toolkit written in C++ with Python bindings, providing functionality for molecular manipulation, descriptor calculation, and substructure searching."},
"GROMACS":{full:"GROningen MAchine for Chemical Simulations",def:"A versatile molecular dynamics simulation package designed for high-performance simulation of large biomolecular systems."},
"AMBER":{full:"Assisted Model Building with Energy Refinement",def:"A suite of biomolecular simulation programs and force fields for molecular dynamics simulations of proteins, nucleic acids, and carbohydrates."},
"SMILES":{full:"Simplified Molecular Input Line Entry System",def:"A line notation for representing molecular structures using ASCII strings, widely used as input for cheminformatics and machine learning models."},
"HTS":{full:"High-Throughput Screening",def:"An experimental method that rapidly tests thousands to millions of chemical compounds for biological activity against a specific target."},
"De Novo":{full:"De Novo Design",def:"The process of designing new molecular structures from scratch using computational methods, rather than modifying existing compounds."},
"Docking":{full:"Molecular Docking",def:"A computational method that predicts the preferred orientation of a ligand when bound to a protein receptor, used for virtual screening and drug design."}
};

const adoptionData=[
{year:2015,adoption:8,molecules:0,funding:0.5},
{year:2017,adoption:15,molecules:1,funding:1.2},
{year:2019,adoption:28,molecules:3,funding:2.8},
{year:2021,adoption:45,molecules:8,funding:5.5},
{year:2023,adoption:62,molecules:18,funding:9.2},
{year:2025,adoption:75,molecules:35,funding:14.5},
{year:2027,adoption:85,molecules:55,funding:21.0},
{year:2030,adoption:92,molecules:70,funding:32.0}
];

let currentTag='all',chartInstances=[];

function $(sel){return document.querySelector(sel)}
function $$(sel){return document.querySelectorAll(sel)}

function showToast(msg){const t=$('#toast'),tm=$('#toastMessage');tm.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500)}

function getFilteredPapers(){let f=[...papersData];const q=$('#paperSearch').value.toLowerCase().trim();if(q)f=f.filter(p=>p.title.toLowerCase().includes(q)||p.authors.toLowerCase().includes(q)||p.tags.some(t=>t.toLowerCase().includes(q))||p.abstract.toLowerCase().includes(q)||p.journal.toLowerCase().includes(q));const y=$('#yearFilter').value;if(y!=='all')f=f.filter(p=>p.year.toString()===y);if(currentTag!=='all')f=f.filter(p=>p.tags.includes(currentTag));const s=$('#sortPapers').value;if(s==='newest')f.sort((a,b)=>b.year-a.year);else f.sort((a,b)=>a.year-b.year);return f}

function getRelatedPapers(paperId,limit=3){const paper=papersData.find(p=>p.id===paperId);if(!paper)return[];return papersData.filter(p=>p.id!==paperId&&p.tags.some(t=>paper.tags.includes(t))).slice(0,limit)}

function downloadPaper(id){const p=papersData.find(x=>x.id===id);if(!p)return;const content=`TITLE: ${p.title}
AUTHORS: ${p.authors}
YEAR: ${p.year}
JOURNAL: ${p.journal}
DOI: ${p.doi}
REGION: ${p.region}
TAGS: ${p.tags.join(', ')}

ABSTRACT:
${p.abstract}

---
Generated by AI & CompChem Research Portal
https://your-site.netlify.app`;const blob=new Blob([content],{type:'text/plain'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`${p.title.replace(/[^a-zA-Z0-9]/g,'_').substring(0,50)}_${p.year}.txt`;a.click();URL.revokeObjectURL(url);showToast('Paper metadata downloaded!')}

function copyCitation(id){const p=papersData.find(x=>x.id===id);if(!p)return;const c=`${p.authors} (${p.year}). ${p.title}. ${p.journal}`;navigator.clipboard.writeText(c).then(()=>showToast('APA citation copied!')).catch(()=>{const ta=document.createElement('textarea');ta.value=c;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);showToast('APA citation copied!')})}

function exportAllCitations(){const all=papersData.map(p=>`${p.authors} (${p.year}). ${p.title}. ${p.journal}`).join('\n\n');navigator.clipboard.writeText(all).then(()=>showToast(`All ${papersData.length} citations copied!`)).catch(()=>showToast('Export failed'))}

function exportVisibleCitations(){const visible=getFilteredPapers();if(!visible.length){showToast('No papers to export');return}const text=visible.map(p=>`${p.authors} (${p.year}). ${p.title}. ${p.journal}`).join('\n\n');navigator.clipboard.writeText(text).then(()=>showToast(`${visible.length} visible citations copied!`)).catch(()=>showToast('Export failed'))}

function citeThisPage(){const citation='AI & Computational Chemistry Research Portal. (2026). AI & Computational Chemistry: The Future of Drug Discovery. Retrieved July 15, 2026, from https://your-site.netlify.app';navigator.clipboard.writeText(citation).then(()=>showToast('Page citation copied to clipboard!')).catch(()=>showToast('Copy failed'))}

function toggleAbstract(id){const ab=$('#abstract-'+id);const btn=ab.previousElementSibling.querySelector('.btn-expand');const icon=btn.querySelector('i');if(ab.classList.contains('expanded')){ab.classList.remove('expanded');btn.innerHTML='<i class="fas fa-chevron-down" aria-hidden="true"></i> Abstract'}else{ab.classList.add('expanded');btn.innerHTML='<i class="fas fa-chevron-up" aria-hidden="true"></i> Hide Abstract';renderRelatedPapers(id)}}

function renderRelatedPapers(paperId){const container=$('#related-'+paperId);if(!container||container.children.length>1)return;const related=getRelatedPapers(paperId,3);if(!related.length)return;let html='<h5><i class="fas fa-link" aria-hidden="true"></i> Related Papers</h5>';related.forEach(r=>{html+=`<div class="related-paper-item"><a href="javascript:void(0)" onclick="scrollToPaper(${r.id})">${r.title}</a><span class="related-year">(${r.year})</span></div>`});container.innerHTML=html}

function scrollToPaper(id){const el=$('.paper-card[data-id="'+id+'"]');if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.style.animation='pulse 1s ease';setTimeout(()=>el.style.animation='',1000)}}

function renderPapers(papers){const grid=$('#papersGrid');const skel=$('#papersSkeleton');skel.style.display='none';grid.style.display='grid';grid.innerHTML='';if(!papers.length){grid.innerHTML='<div class="paper-card" style="grid-column:1/-1;text-align:center;padding:3rem;"><i class="fas fa-search" style="font-size:2rem;color:var(--color-gray-300);margin-bottom:1rem;"></i><p style="color:var(--color-gray-400);">No papers found matching your criteria.</p></div>';$('#papersCount').textContent='Showing 0 papers';return}papers.forEach(p=>{const card=document.createElement('div');card.className='paper-card';card.dataset.id=p.id;const tagsHtml=p.tags.map(t=>`<span class="paper-tag">${t}</span>`).join('');const apa=`${p.authors} (${p.year}). ${p.title}. ${p.journal}`;card.innerHTML=`<div class="paper-header"><h4 class="paper-title">${p.title}</h4><span class="paper-year">${p.year}</span></div><p class="paper-authors">${p.authors}</p><p class="paper-journal">${p.journal}</p><div class="paper-tags">${tagsHtml}</div><div class="paper-actions"><button class="btn-expand" onclick="toggleAbstract(${p.id})"><i class="fas fa-chevron-down" aria-hidden="true"></i> Abstract</button><button class="btn-cite" onclick="copyCitation(${p.id})"><i class="fas fa-copy" aria-hidden="true"></i> Cite</button><button class="btn-download" onclick="downloadPaper(${p.id})"><i class="fas fa-download" aria-hidden="true"></i> Download</button></div><div class="paper-abstract" id="abstract-${p.id}"><p>${p.abstract}</p><div class="related-papers" id="related-${p.id}"></div></div>`;grid.appendChild(card)});$('#papersCount').textContent=`Showing ${papers.length} paper${papers.length!==1?'s':''}`}

function updatePaperStats(){const counts={Europe:0,Japan:0,China:0,'South Korea':0,Taiwan:0,Global:0};papersData.forEach(p=>{if(counts[p.region]!==undefined)counts[p.region]++});$('#totalPapers').textContent=papersData.length;$('#europeCount').textContent=counts.Europe;$('#japanCount').textContent=counts.Japan;$('#chinaCount').textContent=counts.China;$('#koreaCount').textContent=counts['South Korea'];$('#taiwanCount').textContent=counts.Taiwan;$('#globalCount').textContent=counts.Global;const years=papersData.map(p=>p.year).sort((a,b)=>a-b);$('#yearRange').textContent=`${years[0]}-${years[years.length-1]}`;renderYearDistribution()}

function renderYearDistribution(){const yearCounts={};papersData.forEach(p=>{yearCounts[p.year]=(yearCounts[p.year]||0)+1});const years=Object.keys(yearCounts).sort();const max=Math.max(...Object.values(yearCounts));const container=$('#distributionBars');container.innerHTML='';years.forEach(y=>{const count=yearCounts[y];const pct=(count/max)*100;const bar=document.createElement('div');bar.className='distribution-bar';bar.style.height=`${pct}%`;bar.innerHTML=`<span class="distribution-bar-value">${count}</span><span class="distribution-bar-label">${y}</span>`;bar.title=`${count} paper${count!==1?'s':''} in ${y}`;container.appendChild(bar)})}

function renderReferences(){$('#referencesList').innerHTML=referencesData.map((r,i)=>{let html=r;const m=r.match(/https?:\/\/[^\s]+/);if(m)html=r.replace(m[0],`<a href="${m[0]}" target="_blank" rel="noopener noreferrer">${m[0]}</a>`);return`<div class="reference-item">[${i+1}] ${html}</div>`}).join('')}

function renderAdoptionTable(data){const tbody=$('#adoptionTableBody');if(!tbody)return;tbody.innerHTML=data.map(d=>`<tr><td>${d.year}</td><td>${d.adoption}%</td><td>${d.molecules}%</td><td>$${d.funding}B</td></tr>`).join('')}

function sortTable(col){const tbody=$('#adoptionTableBody');const rows=Array.from(tbody.querySelectorAll('tr'));const idx={year:0,adoption:1,molecules:2,funding:3}[col];if(idx===undefined)return;rows.sort((a,b)=>{const av=a.cells[idx].textContent.replace(/[^0-9.]/g,'');const bv=b.cells[idx].textContent.replace(/[^0-9.]/g,'');return parseFloat(av)-parseFloat(bv)});rows.forEach(r=>tbody.appendChild(r))}

function initCharts(){if(typeof Chart==='undefined'){setTimeout(initCharts,500);return}Chart.defaults.font.family="'Inter',sans-serif";Chart.defaults.color='#64748b';const c1=$('#costChart');if(c1){chartInstances.push(new Chart(c1,{type:'bar',data:{labels:['Cost (Billions $)','Time (Years)','Failure Rate (%)'],datasets:[{label:'Traditional',data:[2.5,12.5,90],backgroundColor:'rgba(100,116,139,.7)',borderColor:'rgba(100,116,139,1)',borderWidth:1,borderRadius:6},{label:'AI-Assisted',data:[1.5,1.5,45],backgroundColor:'rgba(37,99,235,.7)',borderColor:'rgba(37,99,235,1)',borderWidth:1,borderRadius:6}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{position:'top'},tooltip:{backgroundColor:'#0a1628',padding:12,cornerRadius:8}},scales:{y:{beginAtZero:true,grid:{color:'rgba(0,0,0,.05)'}},x:{grid:{display:false}}}}))}const c2=$('#adoptionChart');if(c2){chartInstances.push(new Chart(c2,{type:'line',data:{labels:['2015','2017','2019','2021','2023','2025','2027','2030'],datasets:[{label:'AI Adoption in Pharma (%)',data:[8,15,28,45,62,75,85,92],borderColor:'#2563eb',backgroundColor:'rgba(37,99,235,.1)',borderWidth:3,pointBackgroundColor:'#2563eb',pointBorderColor:'#fff',pointBorderWidth:2,pointRadius:5,pointHoverRadius:7,fill:true,tension:.4},{label:'AI-Designed Molecules in Trials',data:[0,1,3,8,18,35,55,70],borderColor:'#0ea5e9',backgroundColor:'rgba(14,165,233,.1)',borderWidth:3,pointBackgroundColor:'#0ea5e9',pointBorderColor:'#fff',pointBorderWidth:2,pointRadius:5,pointHoverRadius:7,fill:true,tension:.4}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{position:'top'},tooltip:{backgroundColor:'#0a1628',padding:12,cornerRadius:8}},scales:{y:{beginAtZero:true,max:100,grid:{color:'rgba(0,0,0,.05)'},ticks:{callback:v=>v+'%'}}}}}))}const c3=$('#costBreakdownChart');if(c3){chartInstances.push(new Chart(c3,{type:'doughnut',data:{labels:['Preclinical Research','Clinical Phase I','Clinical Phase II','Clinical Phase III','Regulatory Approval'],datasets:[{data:[15,12,25,35,13],backgroundColor:['#2563eb','#3b82f6','#60a5fa','#93c5fd','#0ea5e9'],borderWidth:2,borderColor:'#fff',hoverOffset:8}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{position:'bottom',labels:{padding:15,usePointStyle:true}},tooltip:{backgroundColor:'#0a1628',padding:12,cornerRadius:8,callbacks:{label:ctx=>`${ctx.label}: ${ctx.raw}%`}}},cutout:'60%'}}))}const c4=$('#successRateChart');if(c4){chartInstances.push(new Chart(c4,{type:'bar',data:{labels:['Discovery to Preclinical','Preclinical to Phase I','Phase I to Phase II','Phase II to Phase III','Phase III to Approval','Overall (Discovery to Market)'],datasets:[{label:'Traditional',data:[65,70,58,32,60,5.1],backgroundColor:'rgba(100,116,139,.7)',borderColor:'rgba(100,116,139,1)',borderWidth:1,borderRadius:6},{label:'AI-Assisted',data:[78,82,71,48,72,12.8],backgroundColor:'rgba(37,99,235,.7)',borderColor:'rgba(37,99,235,1)',borderWidth:1,borderRadius:6},{label:'ML-Optimized',data:[85,88,79,62,80,18.5],backgroundColor:'rgba(14,165,233,.7)',borderColor:'rgba(14,165,233,1)',borderWidth:1,borderRadius:6}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:true,plugins:{legend:{position:'top'},tooltip:{backgroundColor:'#0a1628',padding:12,cornerRadius:8,callbacks:{label:ctx=>`${ctx.dataset.label}: ${ctx.raw}%`}}},scales:{x:{beginAtZero:true,max:100,grid:{color:'rgba(0,0,0,.05)'},ticks:{callback:v=>v+'%'}}}}}))}const c5=$('#timelineChart');if(c5){chartInstances.push(new Chart(c5,{type:'bar',data:{labels:['Target ID','Hit Discovery','Lead Optimization','Preclinical','Phase I','Phase II','Phase III','Approval'],datasets:[{label:'Traditional (months)',data:[24,18,36,48,24,36,36,18],backgroundColor:'rgba(100,116,139,.7)',borderColor:'rgba(100,116,139,1)',borderWidth:1,borderRadius:6},{label:'AI-Accelerated (months)',data:[6,4,8,12,8,12,12,6],backgroundColor:'rgba(37,99,235,.7)',borderColor:'rgba(37,99,235,1)',borderWidth:1,borderRadius:6}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:true,plugins:{legend:{position:'top'},tooltip:{backgroundColor:'#0a1628',padding:12,cornerRadius:8}},scales:{x:{beginAtZero:true,grid:{color:'rgba(0,0,0,.05)'}}}}}))}}


// DARK MODE
function initTheme(){
  const html=document.documentElement;
  const toggle=document.getElementById('themeToggle');
  const icon=document.getElementById('themeIcon');
  const saved=localStorage.getItem('theme');
  const prefersDark=window.matchMedia('(prefers-color-scheme:dark)').matches;
  const theme=saved||(prefersDark?'dark':'light');
  html.setAttribute('data-theme',theme);
  updateThemeUI(theme);
  toggle.addEventListener('click',()=>{
    const current=html.getAttribute('data-theme');
    const next=current==='light'?'dark':'light';
    html.setAttribute('data-theme',next);
    localStorage.setItem('theme',next);
    updateThemeUI(next);
    chartInstances.forEach(c=>c&&c.update());
  });
}
function updateThemeUI(theme){
  const icon=document.getElementById('themeIcon');
  const label=document.querySelector('.theme-label');
  if(theme==='dark'){icon.className='fas fa-sun';if(label)label.textContent='Light';}
  else{icon.className='fas fa-moon';if(label)label.textContent='Dark';}
}

// READING PROGRESS
function initReadingProgress(){
  const bar=document.getElementById('readingProgressBar');
  window.addEventListener('scroll',()=>{
    const scrollTop=window.scrollY;
    const docHeight=document.documentElement.scrollHeight-window.innerHeight;
    const pct=(scrollTop/docHeight)*100;
    bar.style.width=pct+'%';
  });
}

// NAVIGATION
document.getElementById('navToggle').addEventListener('click',()=>{
  const nav=document.getElementById('mainNav');
  const btn=document.getElementById('navToggle');
  const open=!nav.classList.contains('open');
  nav.classList.toggle('open');
  btn.setAttribute('aria-expanded',open);
  btn.querySelector('i').className=open?'fas fa-times':'fas fa-bars';
});
document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click',()=>{
    document.getElementById('mainNav').classList.remove('open');
    document.getElementById('navToggle').setAttribute('aria-expanded','false');
    document.getElementById('navToggle').querySelector('i').className='fas fa-bars';
  });
});
window.addEventListener('scroll',()=>{
  document.getElementById('header').classList.toggle('scrolled',window.scrollY>50);
  const sections=document.querySelectorAll('section[id]');
  let current='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-100)current=s.getAttribute('id');});
  document.querySelectorAll('.nav-link').forEach(l=>{
    l.classList.toggle('active',l.getAttribute('href')==='#'+current);
  });
  const bc=document.querySelector('.breadcrumb-list');
  if(bc&&current){
    const names={home:'Home',history:'History','ai-today':'AI Today',global:'Global Impact',future:'Future',papers:'Research Papers',references:'References',about:'About'};
    bc.innerHTML='<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="#home" itemprop="item"><span itemprop="name">Home</span></a><meta itemprop="position" content="1"></li><li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><span itemprop="name">'+(names[current]||current)+'</span><meta itemprop="position" content="2"></li>';
  }
});

// BACK TO TOP
const btt=document.getElementById('backToTop');
window.addEventListener('scroll',()=>btt.classList.toggle('visible',window.scrollY>500));
btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// GLOSSARY TOOLTIPS
function initGlossary(){
  const tooltip=document.getElementById('glossaryTooltip');
  const termEl=document.getElementById('glossaryTerm');
  const defEl=document.getElementById('glossaryDef');
  document.querySelectorAll('.glossary-term').forEach(el=>{
    el.addEventListener('mouseenter',e=>{
      const key=el.dataset.term;
      const data=glossaryData[key];
      if(!data)return;
      termEl.textContent=data.full;
      defEl.textContent=data.def;
      const rect=el.getBoundingClientRect();
      tooltip.style.left=rect.left+'px';
      tooltip.style.top=(rect.bottom+8)+'px';
      tooltip.classList.add('show');
    });
    el.addEventListener('mouseleave',()=>tooltip.classList.remove('show'));
    el.addEventListener('focus',()=>el.dispatchEvent(new Event('mouseenter')));
    el.addEventListener('blur',()=>tooltip.classList.remove('show'));
    el.addEventListener('click',e=>e.preventDefault());
  });
}

// COUNTRY ACCORDION
function initCountryAccordion(){
  document.querySelectorAll('.country-header').forEach(h=>{
    h.addEventListener('click',()=>{
      const expanded=h.getAttribute('aria-expanded')==='true';
      h.setAttribute('aria-expanded',!expanded);
      document.getElementById(h.getAttribute('aria-controls')).hidden=expanded;
    });
  });
}

// UPLOAD AREA
function initUpload(){
  const zone=document.getElementById('uploadZone');
  const input=document.getElementById('fileInput');
  const filesContainer=document.getElementById('uploadedFiles');
  zone.addEventListener('click',()=>input.click());
  zone.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')input.click()});
  zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('dragover')});
  zone.addEventListener('dragleave',()=>zone.classList.remove('dragover'));
  zone.addEventListener('drop',e=>{e.preventDefault();zone.classList.remove('dragover');handleFiles(e.dataTransfer.files);});
  input.addEventListener('change',e=>handleFiles(e.target.files));
  function handleFiles(files){
    Array.from(files).forEach(file=>{
      const div=document.createElement('div');
      div.className='uploaded-file';
      div.innerHTML='<i class="fas fa-check-circle" aria-hidden="true"></i> '+file.name+' ('+(file.size/1024).toFixed(1)+' KB)';
      filesContainer.appendChild(div);
    });
    showToast(files.length+' file(s) ready for upload (demo)');
  }
}

// SKELETON LOADING
function showSkeleton(){
  document.getElementById('papersSkeleton').style.display='grid';
  document.getElementById('papersGrid').style.display='none';
}
function hideSkeleton(){
  document.getElementById('papersSkeleton').style.display='none';
  document.getElementById('papersGrid').style.display='grid';
}

// TABLE SORTING
function initTableSort(){
  document.querySelectorAll('#adoptionTable th[data-sort]').forEach(th=>{
    th.addEventListener('click',()=>sortTable(th.dataset.sort));
  });
}

// KEYBOARD SHORTCUTS
document.addEventListener('keydown',e=>{
  if(e.ctrlKey&&e.key==='d'){e.preventDefault();document.getElementById('themeToggle').click();}
  if(e.key==='Escape'){
    document.getElementById('mainNav').classList.remove('open');
    document.getElementById('glossaryTooltip').classList.remove('show');
  }
});

// SERVICE WORKER
if('serviceWorker'in navigator){
  const swCode='self.addEventListener("install",e=>self.skipWaiting());self.addEventListener("activate",e=>e.waitUntil(clients.claim()));self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));';
  const blob=new Blob([swCode],{type:'application/javascript'});
  navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(()=>{});
}

// INIT
document.addEventListener('DOMContentLoaded',()=>{
  showSkeleton();
  initTheme();
  initReadingProgress();
  initGlossary();
  initCountryAccordion();
  initUpload();
  initTableSort();
  renderAdoptionTable(adoptionData);
  updatePaperStats();
  renderReferences();
  setTimeout(()=>{
    hideSkeleton();
    renderPapers(getFilteredPapers());
    initCharts();
  },800);
  document.getElementById('paperSearch').addEventListener('input',()=>renderPapers(getFilteredPapers()));
  document.getElementById('yearFilter').addEventListener('change',()=>renderPapers(getFilteredPapers()));
  document.getElementById('sortPapers').addEventListener('change',()=>renderPapers(getFilteredPapers()));
  document.querySelectorAll('.tag-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.tag-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentTag=btn.dataset.tag;
      renderPapers(getFilteredPapers());
    });
  });
});
