# Strip liquid tags

module Jekyll
  module StripLiquidFilter
    def strip_liquid(input)
      input.gsub(/({{|{%).*(}}|%})/, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::StripLiquidFilter)
