
import React, { useState } from "react";
import { pageContent } from "@/data/pageContent";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const ContentEditor = () => {
  const [content, setContent] = useState(JSON.stringify(pageContent, null, 2));
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const handleSave = () => {
    try {
      const parsedContent = JSON.parse(content);
      // In a real application, you would save this to a database or local storage
      // For now, we'll just show a success toast
      toast({
        title: "Content updated",
        description: "Your changes would be saved in a real application.",
        duration: 3000,
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Invalid JSON",
        description: "Please check your JSON format and try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };
  
  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white hover:bg-black/80"
        >
          Edit Content
        </Button>
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Content Editor</h2>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
        
        <div className="p-4 flex-1 overflow-auto">
          <Accordion type="single" collapsible className="mb-4">
            <AccordionItem value="instructions">
              <AccordionTrigger>Instructions</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-2">
                  This is a simple JSON editor for your page content. Edit the JSON below to update the content on your page.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  In a real application, you would want to create a more user-friendly interface with form fields for each section.
                </p>
                <p className="text-sm text-muted-foreground">
                  For now, this allows you to experiment with different content without editing individual component files.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <Separator className="my-4" />
          
          <div className="mt-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-[50vh] p-4 font-mono text-sm border rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        </div>
        
        <div className="p-4 border-t flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-black text-white hover:bg-black/80">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
