export interface SearchResult {
    position: number;
    url: string;
    title: string;
    description: string;
  }
  
  interface KnowledgePanel {
    name: string;
    label: string;
    description: {
      text: string;
      url: string;
      site: string;
    };
    image: {
      url: string;
      width: number;
      height: number;
      page_url: string;
    };
    info: {
      title: string;
      labels: string[];
    }[];
  }
  
  interface RelatedKeyword {
    position: number;
    knowledge: {
      title: string;
      label: string;
      image: string;
    } | null;
    keyword_html: string;
    keyword: string;
  }
  
  export interface ApiResponse {
    search_term: string;
    knowledge_panel: KnowledgePanel;
    results: SearchResult[];
    related_keywords: {
      spelling_suggestion_html: string | null;
      spelling_suggestion: string | null;
      keywords: RelatedKeyword[];
    };
  }
  