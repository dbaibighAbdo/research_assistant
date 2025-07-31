# research_assistant

Our goal is to build a lightweight, multi-agent system around chat models that customizes the research process.

`Source Selection` 
* Users can choose any set of input sources for their research.
  
`Planning` 
* Users provide a topic, and the system generates a team of AI analysts, each focusing on one sub-topic.
* `Human-in-the-loop` will be used to refine these sub-topics before research begins.
  
`LLM Utilization`
* Each analyst will conduct in-depth interviews with an expert AI using the selected sources.
* The interview will be a multi-turn conversation to extract detailed insights as shown in the [STORM](https://arxiv.org/abs/2402.14207) paper.
* These interviews will be captured in a using `sub-graphs` with their internal state. 
   
`Research Process`
* Experts will gather information to answer analyst questions in `parallel`.
* And all interviews will be conducted simultaneously through `map-reduce`.

`Output Format` 
* The gathered insights from each interview will be synthesized into a final report.
* We'll use customizable prompts for the report, allowing for a flexible output format. 


## Instructions

* 1:
you need python3.11 or +

* 2:
pip install -r requirements.txt

* 3:
setup your envirenment variables (.env)

* 4:
run research_assistant.py

* 5:
check out [LangSmith](https://docs.smith.langchain.com/) for [tracing] (https://docs.smith.langchain.com/concepts/tracing).

* 6:
or run the langGraph studio using "laggraph dev" command


