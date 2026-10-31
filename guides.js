// Editable learning activities; students should match topics to classwork and teacher feedback.
function taskGuides(subject,level='2'){
const upper=+level>=3,n=upper?8:6;
const g=(method,title,why)=>({method,title,why});
const banks={
'English':[
g('Comprehension','Complete 1 comprehension passage and correct 3 mistakes','Use evidence from the passage. Explain why each corrected answer works.'),
g('Writing plan',`Plan 1 ${upper?'argumentative':'personal recount'} essay with 3 supporting points and review the structure`,'Plan ideas before writing. Check that each point answers the question.'),
g('Writing practice','Write 1 introduction and 1 body paragraph, then review 2 improvements','Practise a manageable section and apply your teacher’s feedback.'),
g('Vocabulary','Review 10 vocabulary words and write 5 original sentences, then check usage','Recall meanings first; check how each word works in a sentence.'),
g('Oral','Practise 1 oral response aloud and note 2 improvements','Record yourself if useful. Check clarity, examples and pace.'),
g('Editing','Complete 1 editing exercise and explain 3 corrected errors','Name the grammar rule behind each correction.'),
g('Listening','Answer 5 questions about 1 short audio passage and check the answers','Use a teacher-approved recording. Listen again for missed details.'),
g('Summary','Write 1 passage summary within the assigned word limit and check 3 key points','Use your own words and follow your teacher’s task requirements.')],
'Mathematics':[
g('Targeted practice',`Solve ${n} questions on ${upper?'algebra and graphs':'fractions and algebra'} and redo all incorrect answers`,'Choose a recently taught topic. Show working, not just final answers.'),
g('Worked examples','Explain 2 worked examples in your own words, then solve 2 similar questions','Cover each next step and predict it before checking.'),
g('Error log','Redo 4 questions from your error log and explain each corrected mistake','Focus on the cause: concept, method, calculation or reading the question.'),
g('Recall','Write 5 topic formulas from memory and check their conditions of use','Add what each symbol means and when the formula applies.'),
g('Mixed practice','Complete 1 mixed-topic exercise and mark all answers','Mix familiar topics so you practise choosing the right method.'),
g('Timed practice','Solve 6 questions in 20 minutes and review 2 slow or incorrect solutions','Use a realistic time limit, then review without rushing.'),
g('Explain reasoning','Write 2 explanations for graph or geometry questions and compare with worked solutions','Practise the reasoning needed to earn method marks.')],
'Additional Mathematics':[
g('Functions','Solve 6 questions on quadratic functions and correct all errors','Check your syllabus and practise interpreting both equations and graphs.'),
g('Algebra','Complete 1 algebra exercise and explain 3 key steps','Show substitutions and restrictions clearly.'),
g('Graph recall','Draw 4 topic graphs from memory and check intercepts and shapes','Choose graph types your class has already covered.'),
g('Error log','Redo 4 difficult questions from 1 weak topic and compare solutions','Redo the full solution before checking the model answer.'),
g('Method choice','Explain 2 worked examples and solve 3 related questions independently','Say why the method works rather than memorising the steps.'),
g('Timed practice','Answer 5 mixed-topic questions in 25 minutes and review every mistake','Adjust the number of questions for their difficulty.')],
'Science':[
g('Recall','Write 8 questions and answers on 1 science topic from memory, then check your notes','Test recall before opening the textbook.'),
g('Structured questions','Answer 5 structured science questions and mark using your notes','Check scientific keywords and links between cause and effect.'),
g('Diagrams','Draw 2 science diagrams from memory and correct missing labels','Choose diagrams from current classwork.'),
g('Data skills','Answer 3 graph interpretation questions and check units and trends','Describe the pattern before explaining it.'),
g('Practical skills','Plan 1 experiment and check the variables, method and safety steps','Follow teacher guidance; this is a written plan, not an unsupervised experiment.'),
g('Corrections','Redo 4 science questions you previously missed and explain each correction','Turn feedback into a specific change in your explanation.')],
'Physics':[
g('Calculations','Solve 6 physics calculation questions and check units and working','Write the formula, substitute values and include the final unit.'),
g('Concept recall','Explain 3 physics concepts without notes and correct missing keywords','Use a familiar real-world example for each concept.'),
g('Graphs','Answer 4 physics graph questions and check gradients and units','Identify the variables before calculating a gradient or area.'),
g('Diagrams','Draw 3 ray, force or circuit diagrams and check labels','Choose diagram types your class has covered.'),
g('Practical reasoning','Answer 3 experiment questions and review variables and sources of error','Link improvements to a specific measurement problem.'),
g('Corrections','Redo 4 physics questions from your error log and explain corrections','Distinguish errors in concepts from errors in calculation.')],
'Chemistry':[
g('Equations','Write 8 chemical equations for 1 topic and check balancing and state symbols','Choose reactions taught in class.'),
g('Particles','Draw 3 particle or bonding diagrams and correct all labels','Check particles, charges and structure against class notes.'),
g('Calculations','Solve 5 chemistry calculation questions and review units and ratios','Show each calculation step and use the correct mole ratio.'),
g('Recall','Answer 10 short chemistry topic questions from memory and mark them','Turn missed facts into a short self-quiz.'),
g('Practical skills','Answer 4 practical chemistry questions and check observations and conclusions','Use precise observations; keep explanations separate.'),
g('Corrections','Redo 4 chemistry questions and explain why the original answers were incorrect','Include the scientific keywords needed in the corrected answers.')],
'Biology':[
g('Processes','Draw 1 biology process diagram from memory and check 5 key details','Use arrows and labels to show the order and relationships.'),
g('Structured answers','Answer 5 biology structured questions and correct missing keywords','Match the amount of detail to the command word and marks.'),
g('Compare','Write 1 comparison table for 2 biology concepts and check each difference','Compare the same feature on both sides of the table.'),
g('Data skills','Answer 3 biology data questions and check evidence for each explanation','Quote relevant data before explaining a trend.'),
g('Recall','Answer 10 biology topic questions without notes and review mistakes','Use retrieval practice before rereading.'),
g('Practical reasoning','Plan 1 biology experiment and check variables and reliability','Use a written method and follow teacher instructions.')],
'Mother Tongue':[
g('Comprehension','Complete 1 comprehension passage and correct 3 errors','Identify evidence and explain answers in the required language.'),
g('Vocabulary','Review 10 vocabulary words and write 5 example sentences, then check usage','Practise useful phrases in context, not as an isolated list.'),
g('Oral','Practise 1 oral picture or video response and note 2 improvements','Use an example and explain your opinion clearly.'),
g('Writing','Plan 1 essay with 3 key ideas and check the sequence','Match the format and register to the assigned task.'),
g('Reading aloud','Read 1 passage aloud twice and correct 5 pronunciation errors','Use teacher-approved audio or feedback to check pronunciation.'),
g('Listening','Answer 5 questions about 1 audio passage and review missed details','Listen first for the main message, then for supporting details.'),
g('Corrections','Rewrite 1 corrected paragraph and explain 3 language improvements','Apply teacher feedback to a new paragraph afterwards.')],
'History':[
g('Source inference','Answer 2 source inference questions and check supporting evidence','State an inference, select evidence and explain the link.'),
g('Source comparison','Write 1 source comparison paragraph and review 2 similarities or differences','Compare the same issue across both sources.'),
g('Essay plan','Plan 1 history essay with 3 arguments and check factual evidence','Each argument should address the question directly.'),
g('Chronology','Draw 1 topic timeline with 8 events and check cause-and-effect links','Explain connections rather than memorising dates alone.'),
g('Recall','Answer 10 history topic questions without notes and correct mistakes','Use the textbook afterwards to fill gaps.'),
g('Evaluation','Write 1 source reliability paragraph and check provenance and context','Explain how source context affects the claim, following your teacher’s method.')],
'Social Studies':[
g('Inference','Answer 2 source-based inference questions and check evidence','Explain what the evidence suggests about the issue.'),
g('Comparison','Write 1 source comparison paragraph and check 2 points of comparison','Use a common comparison criterion for both sources.'),
g('Evaluation','Answer 1 source reliability question and review context and purpose','Support the evaluation using the source and relevant knowledge.'),
g('Structured response','Plan 1 structured response with 2 explained examples and check relevance','Explain how each example answers the issue.'),
g('Issue recall','Summarise 1 topic in 5 key points and check your notes','Link the key concepts to appropriate Singapore or global examples.'),
g('Corrections','Redo 2 Social Studies questions and apply 3 points of teacher feedback','Review whether your explanations are developed enough.')],
'Geography':[
g('Data skills','Answer 4 geography data questions and check units and trends','Support descriptions with data where appropriate.'),
g('Diagrams','Draw 2 geography process diagrams and correct missing annotations','Annotations should explain how the process works.'),
g('Examples','Write 1 topic example summary with 5 facts and check accuracy','Choose an example from your teacher’s materials.'),
g('Extended writing','Write 1 geography paragraph with 2 explained points and review evidence','Use the question’s command word to guide the response.'),
g('Fieldwork','Plan 1 geography fieldwork method and check sampling and limitations','Think about how the method answers the enquiry question.'),
g('Recall','Answer 10 geography topic questions from memory and correct mistakes','Revisit weak concepts after testing yourself.')],
'Literature':[
g('Close reading','Annotate 1 passage and explain the effects of 3 quotations','Link language choices to meaning, mood or character.'),
g('Analytical writing','Write 1 analytical paragraph and check 2 quotations','Explain the significance of evidence instead of retelling the story.'),
g('Theme map','Draw 1 theme diagram with 4 quotations and check their relevance','Connect quotations to an interpretation of the theme.'),
g('Essay planning','Plan 1 Literature essay with 3 arguments and review the question focus','Build a clear argument across the paragraphs.'),
g('Character study','Write 1 character comparison paragraph and check 2 pieces of evidence','Explain changes or contrasts using precise references.'),
g('Unseen practice','Answer 2 questions on 1 unseen passage and review your interpretations','Support each interpretation using the text.')],
'FCE':[
g('Nutrition','Answer 6 nutrition questions and correct all mistakes','Explain the role of nutrients using examples from class.'),
g('Meal planning','Plan 1 balanced meal and explain 3 food choices, then review the requirements','Check the needs of the person or task in your teacher’s brief.'),
g('Food safety','Explain 5 food safety questions and check each answer','Connect each safe practice to the risk it reduces.'),
g('Practical reflection','Review 1 completed food practical and write 3 improvements','Reflect on methods, timing and the result without needing to cook again.'),
g('Recipe analysis','Annotate 1 recipe with 4 reasons for ingredient or method choices and check notes','Explain the purpose of the choices.'),
g('Recall','Write 8 food topic questions and answers from memory, then mark them','Focus on topics recently covered in class.')],
'D&T':[
g('Design ideas','Draw 3 design sketches and annotate 2 improvements for each, then review the brief','Link each idea to a user need and design requirement.'),
g('Materials','Answer 5 questions on materials and check your answers','Explain why a material fits the intended use.'),
g('Evaluation','Review 1 design against 4 criteria and write 2 justified improvements','Use measurable criteria from your brief.'),
g('Technical drawing','Draw 1 labelled technical sketch and check dimensions and proportions','Use the conventions your teacher has taught.'),
g('Research','Summarise 2 product examples and explain 3 useful design features','Explain how each feature helps the user.'),
g('Process planning','Plan 1 making sequence with 6 steps and review safety and quality checks','Plan on paper; workshop or tool use needs school supervision.')],
'Art':[
g('Artist study','Annotate 1 artist study with 4 observations and check your references','Discuss visual choices and how they might inform your own work.'),
g('Observational drawing','Draw 2 observational sketches and review proportions and tone','Compare each drawing with the subject before adjusting it.'),
g('Idea development','Draw 3 composition sketches and explain 2 improvements to your chosen idea','Connect your choices to your theme or intention.'),
g('Reflection','Write 1 art reflection paragraph and check 3 examples of visual decisions','Explain decisions rather than describing only what you made.'),
g('Colour studies','Complete 3 colour-study sketches and review their mood and contrast','Use suitable school-approved materials.'),
g('Portfolio review','Review 4 portfolio pages and annotate 2 next steps for each','Make the next steps specific and achievable.')],
'Music':[
g('Focused practice','Practise 1 passage slowly and note 3 improvements after a second attempt','Choose one focus such as rhythm, articulation or phrasing.'),
g('Aural skills','Answer 5 aural questions and check using the provided recording or answers','Use teacher-approved listening materials.'),
g('Theory','Complete 1 music theory exercise and correct every error','Explain the rule behind a correction.'),
g('Listening analysis','Annotate 1 music score excerpt with 4 listening observations and review them','Use the musical elements taught in class.'),
g('Composition','Write 1 short composition passage and review 2 development choices','Match the length and requirements to your assignment.'),
g('Performance reflection','Review 1 recorded performance passage and write 3 specific improvements','Listen for one technical focus and one expressive focus.')],
'Computing':[
g('Code tracing','Trace 3 code questions by hand and check the outputs','Track variable values step by step.'),
g('Problem solving','Plan 1 program using pseudocode and check 3 test cases','Include a normal case, a boundary case and an invalid input where relevant.'),
g('Programming','Write 1 small program for a class topic and review 4 test cases','Explain why each test case matters.'),
g('Debugging','Correct 3 code errors and explain why each fix works','Re-run relevant tests after each change.'),
g('Theory recall','Answer 8 computing topic questions from memory and mark them','Check definitions and real examples.'),
g('Algorithm reasoning','Explain 2 algorithms in your own words and compare with worked examples','Trace a small input to verify your explanation.')],
'Principles of Accounts':[
g('Entries','Complete 6 accounting entry questions and check debit and credit rules','Explain the effect on the accounts involved.'),
g('Statements','Complete 1 financial statement exercise and correct all errors','Follow the required layout and check totals.'),
g('Concept recall','Explain 5 accounting concepts from memory and check examples','Connect each concept to a transaction.'),
g('Corrections','Redo 4 accounting questions from your error log and explain each correction','Identify whether the error was in classification, calculation or format.'),
g('Analysis','Answer 3 accounting interpretation questions and review the evidence','Link the figures to your explanation.'),
g('Reconciliation','Complete 1 reconciliation exercise and check each adjustment','Follow the method taught in your class.')],
'Physical Education':[
g('Reflection','Review 1 recent PE lesson and write 3 skill improvements','Use teacher feedback and avoid adding training when you need rest.'),
g('Technique knowledge','Explain 3 technique questions for 1 sport and check class notes','Focus on safe movement and decisions.'),
g('Tactics','Draw 2 sport-tactics diagrams and review the role of each player','Explain the decisions behind the positioning.'),
g('Rules recall','Answer 8 questions on 1 sport’s rules and check the answers','Use materials provided by your teacher.'),
g('Planning','Write 1 activity reflection paragraph and check 2 realistic next steps','Respect recovery time and any guidance from your coach or teacher.'),
g('Feedback review','Review 3 points of PE feedback and write 1 action for each','Choose specific skills or decisions to work on in supervised lessons.')]
};
banks['Nutrition and Food Science']=banks.FCE;
let key=subject;if(!banks[key]&&/chinese|malay|tamil|tongue|language/i.test(key))key='Mother Tongue';
return banks[key]||[
g('Retrieval practice','Answer 8 questions on 1 class topic from memory and check your notes','Try recalling first, then fill the gaps.'),
g('Worked examples','Explain 2 worked examples and complete 3 similar questions, then mark them','Understand the method before practising independently.'),
g('Corrections','Redo 4 topic questions you previously missed and explain each correction','Use teacher feedback to identify a precise improvement.'),
g('Summary','Write 1 topic summary with 5 key points from memory and review it','Check the summary against your lesson materials.'),
g('Timed practice','Complete 1 short topic exercise in 20 minutes and review all mistakes','Choose an exercise suited to your subject and level.'),
g('Teach it back','Explain 3 topic concepts aloud and check missing details in your notes','Use an example for each concept.')];
}
