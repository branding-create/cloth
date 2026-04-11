import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";

interface PolicyDialogProps {
  title: string;
  triggerText: string;
  content: string;
}

export function PolicyDialog({ title, triggerText, content }: PolicyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="text-primary-foreground/50 text-sm hover:text-gold transition-colors text-left bg-transparent border-none p-0 cursor-pointer">
        {triggerText}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-deep-dark border-gold/20 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-gold font-heading text-2xl mb-4">{title}</DialogTitle>
        </DialogHeader>
        <div className="prose prose-invert prose-gold max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </DialogContent>
    </Dialog>
  );
}
