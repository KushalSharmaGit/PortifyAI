import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Copy } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const DnsRecordTable = () => {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        setCopied(true);
      }

      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Name/Host</TableHead>
              <TableHead>Value/Points to</TableHead>
              <TableHead>TTL</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">CNAME</TableCell>
              <TableCell>www</TableCell>
              <TableCell>portify-portfolio-builder-reverse-proxy.vercel.app
              </TableCell>
              <TableCell>3600</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard("76.76.21.21")}>
                  {copied ? "Copied" : (<div>
                    <Copy className="h-4 w-4" />
                  <span className="hidden hover:block">Copy IP address</span>
                  </div>)
                  }
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
}

export default DnsRecordTable